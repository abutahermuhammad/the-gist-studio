# Screma 

```json
*[_type == "post" && approved == true && removed == false && report.status == false ] {
  _id,
  approved,
  removed,
  featured,
  offensive,
  'date': {
    _createdAt,
    _updatedAt,
    '_publishedAt': publishedAt
  },
  title,
  'slug': slug.current ,
  excerpt,
  categories
  ,
 'author': author->{
   _id,
   name,
   'img': image.asset->url
 },
  image,
  body,
  tags,
  importantLinks,
  references
}
```