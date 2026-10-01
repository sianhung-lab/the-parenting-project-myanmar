#!/usr/bin/env python3
"""
Uploads large video files to Cloudflare R2 via S3 Compatibility API
"""
import os
import sys
import boto3
from botocore.config import Config

ACCOUNT_ID = "0a2007ff45edeb4e4119a0fd2516a6ef"
BUCKET_NAME = "parenting-project-videos"

def upload_file(access_key_id, secret_access_key, file_path, object_name):
    endpoint_url = f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com"
    
    print(f"🚀 Connecting to Cloudflare R2 ({BUCKET_NAME})...")
    s3 = boto3.client(
        "s3",
        endpoint_url=endpoint_url,
        aws_access_key_id=access_key_id,
        aws_secret_access_key=secret_access_key,
        region_name="auto",
        config=Config(s3={"addressing_style": "path"})
    )
    
    file_size = os.path.getsize(file_path)
    print(f"📦 Uploading '{os.path.basename(file_path)}' ({file_size / (1024*1024):.1f} MB) as '{object_name}'...")

    uploaded_bytes = 0
    def progress_callback(bytes_amount):
        nonlocal uploaded_bytes
        uploaded_bytes += bytes_amount
        percent = (uploaded_bytes / file_size) * 100
        mb = uploaded_bytes / (1024 * 1024)
        total_mb = file_size / (1024 * 1024)
        sys.stdout.write(f"\r⏳ Progress: {mb:.1f}MB / {total_mb:.1f}MB ({percent:.1f}%)")
        sys.stdout.flush()

    from boto3.s3.transfer import TransferConfig
    transfer_config = TransferConfig(
        multipart_threshold=20 * 1024 * 1024,
        max_concurrency=10,
        multipart_chunksize=20 * 1024 * 1024,
        use_threads=True
    )

    s3.upload_file(
        file_path,
        BUCKET_NAME,
        object_name,
        ExtraArgs={"ContentType": "video/mp4"},
        Config=transfer_config,
        Callback=progress_callback
    )
    print("\n✅ Upload to Cloudflare R2 completed successfully!")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 upload_to_r2.py <ACCESS_KEY_ID> <SECRET_ACCESS_KEY> [FILE_PATH] [OBJECT_NAME]")
        sys.exit(1)
    
    ak = sys.argv[1]
    sk = sys.argv[2]
    fp = sys.argv[3] if len(sys.argv) > 3 else "/Users/richardsmacmini/Downloads/1 Modul Menjadi Teladan Baik Different font_2.mp4"
    obj = sys.argv[4] if len(sys.argv) > 4 else "module-1.mp4"
    upload_file(ak, sk, fp, obj)
