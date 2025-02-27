import requests
import os 
from dotenv import load_dotenv
import json

load_dotenv()

# API_KEY = os.environ("GDRIVE_API_KEY")
API_KEY = os.getenv("GDRIVE_API_KEY")
if not API_KEY: 
    raise ValueError ( " Failed to load API key in environment  ")

ROOT_FOLDER_LINK = "10Q9pxxSB91b4xN9Uqb0mGzGeetsWIPbN"
TARGET_PATH_BASE = 'static/'
TARGET_PATH_BASE_CONTENT = os.listdir(TARGET_PATH_BASE)
EXCLUDE_LIST = ['.nojekyll', 'favicon.png', 'favicon.svg'] # list of variables to 
PHOTODATA_FILE = 'src/lib/assets/photoData.json'

# Get the list of files in the folder
url = f"https://www.googleapis.com/drive/v3/files?q='{ROOT_FOLDER_LINK}'+in+parents&key={API_KEY}"
root_response = requests.get(url).json()

folders = [] 

print(root_response)


## ----- Create folders and download files into Static/ ----- ## 
for folder in root_response['files']: 
    if folder['name'] in TARGET_PATH_BASE_CONTENT:
        print(f"Folder {folder['name']} exists - continuing to next folder")
        continue

    local_folder_path = TARGET_PATH_BASE + folder['name']
    os.mkdir(local_folder_path)
    folder_response = requests.get(url = f"https://www.googleapis.com/drive/v3/files?q='{folder['id']}'+in+parents&key={API_KEY}").json()

    print(f"Created {local_folder_path}")
    
    for file in folder_response['files']:
        file_url = f"https://drive.google.com/uc?export=download&id={file['id']}"
        img_data = requests.get(file_url).content

        with open(os.path.join(local_folder_path,file['name']), "wb") as f:
            f.write(img_data)

        print(f"Downloaded {file['name']}")

## ----- Create photoData.js ----- ## 

photoData = [] ## initialize empty list for .json file


TARGET_PATH_BASE_CONTENT = os.listdir(TARGET_PATH_BASE) ## re-do with new folders in place

for folder in TARGET_PATH_BASE_CONTENT:
    if folder not in EXCLUDE_LIST:
        folder_dict = {'date': f"{folder}" , 'photos': [], 'descs': []} ## structure of folder dictionary that's pushed into photoData
        folder_contents = os.listdir(f"{TARGET_PATH_BASE}{folder}")

        for file in folder_contents:
            if ".jpeg" in file:
                folder_dict['photos'].append({"id":f"{file.split('.')[0]}", "path": f"/{folder}/{file}"})

            if ".txt" in file:
                with open(f"{TARGET_PATH_BASE}{folder}/{file}") as f: 
                    descs_data = json.load(f) 
                
                folder_dict['descs'] = descs_data

        photoData.append(folder_dict)

    else: 
        continue

with open(PHOTODATA_FILE, 'w') as f:
    json.dump(photoData, f)

    print("Edited Pathing file")