import matplotlib.pyplot as plt

labels = 'Living', 'Shopping', 'University', 'Fun', 'Insurance', 'Communication'
sizes = [45,10,10,10,19,6 ]
colors = ['yellowgreen', 'gold', 'silver', 'lightskyblue', 'lightcoral', 'teal']
explode = (0.1,0, 0, 0.1,0,0)

plt.pie(sizes, explode=explode, labels=labels, colors=colors, autopct='%1.1f%%', shadow=False, startangle=90)


plt.axis('equal')
plt.show()