# Dictionary :

student_list = []

def create_student():
    name = input("\nEnter Student's Name :")
    student = {
        'name': name,
        'scores': []
    }
    print('\nNew Student ' + student['name'] + ' Created')
    return student

def add_scores(student, score):
#     m = input("\nEnter csv for marks")
#     input_marks = input("\nEnter csv for marks").split(',')
#     marks = [int(i) for i in input_marks]
#     student['marks'] = marks
    student['scores'].append(score)
    print('\nScore successfully added !\n')
    return None


def average_score(student):
    if len(student['scores']) == 0:
        return 0
        
    average = sum(student['scores'])/len(student['scores'])
    return average

def student_details(student):
    print('\nStudent Name : ' + student['name'])
    print('\nAverage Score :' + str(average_score(student)))

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
