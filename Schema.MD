# Screma 

```json
*[ _type == "post" ] {
    _id,
    data: {
        createdAt,
        publishedAt,
        updatedAt
    },
    title,
    slug,
    category,
    author: {
        _id,
        name
    },
    tags: [],
    excerpt,
    body,
    featured,
    thumbnail: {  // Article Thumbnail.
        _type,  
        assets: [
            _type,  // This data point defines if thumnail is image or video.
            url  // Resources link.  
        ]
    },
    references: [  // All the refrences related to artice are listed here.
        {
            title, 
            url
        }
    ],
    importantLinks: [  // Here all the linked data defined. e.g. individual's forum, event, etc important links.
        {
            _type,
            title,
            url
        }
    ],
    removed,  // Status true, if user removes it. User will never see this data neigher can manage. True data only visible to admin.
    offensive: {  // This parameter defines the content offensive or not. Generraly datas marks as offensive when someone repport against it.
        status,  // Bolean value.
        message  // Reason against offensivenes.
    }
}
```