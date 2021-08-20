from app import ma

class CategorySchema(ma.Schema):
    class Meta:
        fields = ("idCategory", "name")

class BookSchema(ma.Schema):
    class Meta:
        fields = ("idbook", "title", "autor", "year", "category")

    category = ma.Nested(CategorySchema)