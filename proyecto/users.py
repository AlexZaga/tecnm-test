class Users:
    def __init__(self, name, password):
        self.name = name
        self.password = password

    def toDBCollection(self):
        return{
            'name': self.name,
            'password': self.password
        }