import requests

response = requests.get("https://archive.eaglercraft.rip/EaglercraftX_1.8/client/u27/EaglercraftX_1.8_Offline_en_US.html")
with open("download.html", "wb") as file:
    file.write(response.content)