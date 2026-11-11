#!/bin/bash
LOG_FILE="/home/nazarbek/Projects/chiziqli-algebra/tunnel.log"
LINK_FILE="/home/nazarbek/Projects/chiziqli-algebra/ONLINE_LINK.txt"
QR_FILE="/home/nazarbek/Projects/chiziqli-algebra/qr_phone.png"

# Clean old log
> "$LOG_FILE"
echo "Tunel ishga tushmoqda..." > "$LINK_FILE"

# Start cloudflared
/home/nazarbek/.local/bin/cloudflared tunnel --url http://127.0.0.1:8080 --logfile "$LOG_FILE" &
CF_PID=$!

# Wait for tunnel URL in log
for i in {1..30}; do
  URL=$(grep -o 'https://[a-zA-Z0-9.-]*\.trycloudflare\.com' "$LOG_FILE" | head -n 1)
  if [ -n "$URL" ]; then
    echo "$URL" > "$LINK_FILE"
    qrencode -o "$QR_FILE" "$URL" 2>/dev/null
    echo "Online havola tayyor: $URL"
    break
  fi
  sleep 1
done

wait $CF_PID
