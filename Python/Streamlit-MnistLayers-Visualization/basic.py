
import streamlit as st
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

#------------------------------------------------------
# Page Starts Here
#------------------------------------------------------

# Title
st.title('Exploration : Streamlit Fundamentals')

#------------------------------------------------------
# Index (Sidebar)
#------------------------------------------------------

contents = """
## Index

1. Charts
2. Maps
3. Interactivity Widgets
"""
st.sidebar.markdown(contents)

#-----------------------Chart--------------------------

"""
## 1. Charts
"""

df = pd.DataFrame(
        np.random.randn(20, 9)
        , columns=['a', 'b', 'c', 'd', 'e','f','g','h','i'])

st.line_chart(df)

#-----------------------Maps---------------------------

"""
## 2. Maps
"""

map_data = pd.DataFrame(
    np.random.randn(10, 2) / [50, 50] + [54.323334, 10.139444],
    columns=['lat', 'lon'])

st.map(map_data)

#------------------ Interactive Widgets ----------------

"""
## 3. Interactivity Widgets

[Streamlit API Reference](https://docs.streamlit.io/en/stable/api.html)

#### Checkbox
"""

if st.checkbox('Show DataFrame'):
    chart_data = df
    st.write(chart_data)
    

"""
#### Selectbox
:sunglasses:
"""

df = pd.DataFrame({
  'index_no': [1,2,3,4,5,6,7,8,9],
})

option = st.sidebar.selectbox(
    'Which one do you like most?',
     df['index_no'])

'You selected: ', option

left_column, right_column = st.beta_columns(2)

pressed = left_column.button('Refresh')
if pressed:
    right_column.write("New Changes")

expander = st.beta_expander("FAQ")
expander.write("Here you could put in some really, really long explanations...")

