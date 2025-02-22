import requests
import os 
# from dotenv import load_dotenv

# load_dotenv()

API_KEY = os.environ("GDRIVE_API_KEY")
ROOT_FOLDER_LINK = "10Q9pxxSB91b4xN9Uqb0mGzGeetsWIPbN"
TARGET_PATH_BASE = 'static/'

TARGET_PATH_BASE_CONTENT = os.listdir(TARGET_PATH_BASE)

# Get the list of files in the folder
url = f"https://www.googleapis.com/drive/v3/files?q='{ROOT_FOLDER_LINK}'+in+parents&key={API_KEY}"
root_response = requests.get(url).json()

folders = [] 

for folder in root_response['files']: 
    if folder['name'] in TARGET_PATH_BASE_CONTENT:
        print(f"Folder {folder['name']} exists - continuing to next folder")
        continue

    local_folder_path = TARGET_PATH_BASE + folder['name']
    os.mkdir(local_folder_path)
    folder_response = requests.get(url = f"https://www.googleapis.com/drive/v3/files?q='{folder['id']}'+in+parents&key={API_KEY}").json()

    print("Created {local_folder_path}")
    
    for file in folder_response['files']:
        file_url = f"https://drive.google.com/uc?export=download&id={file['id']}"
        img_data = requests.get(file_url).content

        with open(os.path.join(local_folder_path,file['name']), "wb") as f:
            f.write(img_data)

        print("Downloaded {file_name}")
