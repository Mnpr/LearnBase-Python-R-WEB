# Class :

student_list = []


class Student:
    def __init__(self, name):
        self.name = name
        self.scores = []
        
    def average_score(self):
        marks = len(self.scores)
        if marks == 0:
            return 0
        
        average = sum(student.scores)/marks
        return average

def create_student():
    name = input("\nEnter Student's Name :")
    student =  Student(name)
    return student

def add_scores(student, score):
    student.scores.append(score)
    print('\nScore successfully added !\n')



def student_details(student):
    print('\nStudent Name : {},\nAverage Score : {} '.format(student.name, average_score(student)))

def list_students(s_list):
    for i, student in enumerate(s_list):
        print("ID: {}".format(i))
        student_details(student)
        
def menu():
    selection = input('''\n"p": Print Student Details,"a": Add Student,"s" : Add Scores,"q": Quit\n''')
    while(selection != 'q'):
        if selection == 'p':
            list_students(student_list)
        
        elif selection == 'a':
            student_list.append(create_student())
    
        elif selection == 's':
            student_id = int(input("Enter student ID : "))
            student = student_list[student_id]
            new_score = int(input("Enter new Score: "))
            add_scores(student, new_score)
                   
        print("\n----------------------------------------------------------------------------------")
        selection = input('''"p": Print Student Details,"a": Add Student,"s" : Add Scores,"q": Quit\n''')
            
menu()
