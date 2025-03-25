from models.images import Image

_images = [
    Image(batch = "Morso", path = "{top}/static/", altText="a pretty photo", id=".1", imgLocation="Morso Museo", rating=0),
    Image(batch = "Morso", path = "{top}/static/", altText="a nice photo", id=".2", imgLocation="Morso Museo", rating=0),
    Image(batch = "Morso", path = "{top}/static/", altText="a good photo", id=".3", imgLocation="Morso Museo", rating=0),
    Image(batch = "Morso", path = "{top}/static/", altText="a great photo", id=".4", imgLocation="Morso Museo", rating=0),
    Image(batch = "Morso", path = "{top}/static/", altText="a thingie photo", id=".5", imgLocation="Morso Museo", rating=0),
    Image(batch = "Munich", path = "{top}/static/", altText="a pretty photo", id=".1", imgLocation="Munich", rating=0),
    Image(batch = "Munich", path = "{top}/static/", altText="a nice photo", id=".2", imgLocation="Munich", rating=0),
    Image(batch = "Munich", path = "{top}/static/", altText="a good photo", id=".3", imgLocation="Munich", rating=0),
    Image(batch = "Munich", path = "{top}/static/", altText="a great photo", id=".4", imgLocation="Munich", rating=0),
    Image(batch = "Munich", path = "{top}/static/", altText="a thingie photo", id=".5", imgLocation="Munich", rating=0)
]

def get_all_images() -> list[Image]:
    return _images

def get_batch(batch: str) -> list[Image]: 
    batch = [] 

    for image in _images: 
        if image.batch == batch: 
            batch.append(image)
        
    return batch

def get_image(batch: str, id: str) -> Image: 
    for image in _images: 
        if image.batch == batch and image.id == id: 
            return image 
        
    return None 

def upvote_image(batch: str, id: str) -> Image:
    for image in _images: 
        if image.batch == batch and image.id == id:
            image.rating += 1

            return image
