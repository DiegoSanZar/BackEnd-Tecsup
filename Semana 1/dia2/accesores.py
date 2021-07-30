class Person:

    def __init__(self, nombre):
        self.nombre = nombre
        self.__edad = 18
    
    def set_edad(self, value):
        if(value is int):
            if (value >= 18):
                self.__edad = value
            else:
                raise ValueError("La edad debe ser mayor igual que 18")
        else:
            raise ValueError("la edad debe ser un numero entero")

    def get_edad(self):
        return self.__edad

        