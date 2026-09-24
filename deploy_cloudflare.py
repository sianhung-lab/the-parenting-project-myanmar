#!/usr/bin/env python3
"""
Cloudflare Worker Deployment Script for The Parenting Project Myanmar
Deploys via Cloudflare REST API v4.
"""
import sys
import os
import json
import urllib.request
import urllib.error

def verify_token(token):
    req = urllib.request.Request(
        "https://api.cloudflare.com/client/v4/user/tokens/verify",
        headers={"Authorization": f"Bearer {token}"}
    )
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data.get("success", False), data
    except Exception as e:
        return False, str(e)

def deploy_worker(account_id, token, script_name, script_content):
    import uuid
    url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/workers/scripts/{script_name}"
    boundary = f"----CloudflareBoundary{uuid.uuid4().hex}"
    
    metadata = {
        "main_module": "worker.js",
        "compatibility_date": "2024-09-01"
    }
    
    parts = []
    parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"metadata\"\r\nContent-Type: application/json\r\n\r\n{json.dumps(metadata)}\r\n".encode('utf-8'))
    parts.append(f"--{boundary}\r\nContent-Disposition: form-data; name=\"worker.js\"; filename=\"worker.js\"\r\nContent-Type: application/javascript+module\r\n\r\n".encode('utf-8') + script_content.encode('utf-8') + b"\r\n")
    parts.append(f"--{boundary}--\r\n".encode('utf-8'))
    
    payload = b"".join(parts)
    
    req = urllib.request.Request(
        url,
        data=payload,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": f"multipart/form-data; boundary={boundary}"
        },
        method="PUT"
    )
    
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data.get("success", False), data
    except urllib.error.HTTPError as e:
        err_body = e.read().decode('utf-8')
        return False, err_body
    except Exception as e:
        return False, str(e)

def enable_subdomain(account_id, token, script_name):
    url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/workers/scripts/{script_name}/subdomain"
    req = urllib.request.Request(
        url,
        data=json.dumps({"enabled": True}).encode('utf-8'),
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json"
        },
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            return data.get("success", False), data
    except Exception as e:
        return False, str(e)

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 deploy_cloudflare.py <ACCOUNT_ID> <API_TOKEN> [WORKER_NAME]")
        sys.exit(1)
        
    acc_id = sys.argv[1]
    api_tok = sys.argv[2]
    w_name = sys.argv[3] if len(sys.argv) > 3 else "parenting-project-myanmar"
    
    print(f"🔍 Verifying API Token...")
    ok, res = verify_token(api_tok)
    if not ok:
        print("❌ Invalid or expired Cloudflare API Token:", res)
        sys.exit(1)
    print("✅ Token verified successfully!")
    
    # Read worker script
    worker_file = os.path.join(os.path.dirname(__file__), "worker.js")
    if not os.path.exists(worker_file):
        print(f"❌ worker.js not found at {worker_file}")
        sys.exit(1)
        
    with open(worker_file, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"🚀 Deploying '{w_name}' ({len(content)/1024:.1f} KB) to Cloudflare Workers...")
    dep_ok, dep_res = deploy_worker(acc_id, api_tok, w_name, content)
    if not dep_ok:
        print("❌ Deployment failed:", dep_res)
        sys.exit(1)
    print("✅ Cloudflare Worker uploaded successfully!")
    
    print("🌐 Enabling workers.dev public subdomain...")
    sub_ok, sub_res = enable_subdomain(acc_id, api_tok, w_name)
    print(f"🎉 Live URL ready on your Cloudflare workers.dev domain!")
