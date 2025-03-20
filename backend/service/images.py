import fake.images as data
from models.images import Image 

def get_all_images() -> list[Image]:
    return data.get_all_images()

def get_image_batch(id: str) -> list[Image]:
    return data.get_batch(id)

def get_one_image(id: str, imgDescription: str) -> Image:
    return data.get_image(id, imgDescription)
