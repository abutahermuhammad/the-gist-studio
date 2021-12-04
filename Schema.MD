# Screma 

```json
// Articles
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


// News 
*[_type == "news" && removed == false && approved == true && report.status == false ] {
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
  'category': category-> { 
  	_id,
   	title
  },
 'author': author->{
   _id,
   name,
   'img': image.asset->url
 },
  image,
  body,
  'topic': topic,
  importantLinks,
  references
}
```