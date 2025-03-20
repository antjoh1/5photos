from models.images import Image

_images = [
    Image(id = "Morso", path = "{top}/static/", altText="a pretty photo", imgDescription=".1", imgLocation="Morso Museo"),
    Image(id = "Morso", path = "{top}/static/", altText="a nice photo", imgDescription=".2", imgLocation="Morso Museo"),
    Image(id = "Morso", path = "{top}/static/", altText="a good photo", imgDescription=".3", imgLocation="Morso Museo"),
    Image(id = "Morso", path = "{top}/static/", altText="a great photo", imgDescription=".4", imgLocation="Morso Museo"),
    Image(id = "Morso", path = "{top}/static/", altText="a thingie photo", imgDescription=".5", imgLocation="Morso Museo"),
    Image(id = "Munich", path = "{top}/static/", altText="a pretty photo", imgDescription=".1", imgLocation="Munich"),
    Image(id = "Munich", path = "{top}/static/", altText="a nice photo", imgDescription=".2", imgLocation="Munich"),
    Image(id = "Munich", path = "{top}/static/", altText="a good photo", imgDescription=".3", imgLocation="Munich"),
    Image(id = "Munich", path = "{top}/static/", altText="a great photo", imgDescription=".4", imgLocation="Munich"),
    Image(id = "Munich", path = "{top}/static/", altText="a thingie photo", imgDescription=".5", imgLocation="Munich")
]

def get_all_images() -> list[Image]:
    return _images

def get_batch(id: str) -> list[Image]: 
    batch = [] 

    for image in _images: 
        if image.id == id: 
            batch.append(image)
        
    return batch

def get_image(id: str, imgDescription: str) -> Image: 
    for image in _images: 
        if image.id == id and image.imgDescription == imgDescription: 
            return image 
        
    return None 
