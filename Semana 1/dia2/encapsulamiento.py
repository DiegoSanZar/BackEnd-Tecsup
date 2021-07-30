class Empleado:

    def __init__(self, nombre, apellido, salario):
        self.nombre = nombre
        self.apellido = apellido
        self.__salario = salario

juan = Empleado(
    nombre = "juan",
    apellido = "Perez",
    salario=1200 
)

print(f"{juan.nombre} {juan.apellido} gana {juan.salario}")