from flask import Flask, request
import requests

app = Flask(__name__)

BOT_TOKEN = "7264707471:"
CHAT_ID = ""

@app.route("/send", methods=["POST"])
def send():
    data = request.json
    url = data.get("url")
    title = data.get("title")
    text = f"📨 Yangi so‘rov:\nURL: {url}\nSarlavha: {title}"

    requests.get(f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage", params={
        "chat_id": CHAT_ID,
        "text": text
    })
    return "ok"

@app.route("/message", methods=["GET"])
def get_message():
    try:
        with open("latest_msg.txt", "r") as f:
            return f.read()
    except:
        return "Hech qanday maxfiy xabar yo‘q."

@app.route("/set_message", methods=["POST"])
def set_message():
    msg = request.json.get("message")
    with open("latest_msg.txt", "w") as f:
        f.write(msg)
    return "Xabar saqlandi"

if __name__ == "__main__":
    app.run()
