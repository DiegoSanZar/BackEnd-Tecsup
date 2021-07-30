class Dog:

    def __init__(self, vname):
        self.size = "s"
        self.name = vname
        print("instancia creada")
    
    def bark(self):
        print(self.name + "waoof")


jagger = Dog("jagger")
jagger.size = "M"

chazy = Dog("chazy")

jagger.bark()
chazy.bark()

print(jagger.size)
print(chazy.size)

