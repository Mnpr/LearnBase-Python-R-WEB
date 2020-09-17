height <- 3
width <- 6
area <- height*width
area

#Data types in R
class(TRUE)
class(2)
class(2L)
is.numeric(2L)
is.numeric(2)

# double , complex, raw (store raw bytes)
#character
#type conversion
as.numeric(TRUE)
as.character(4)
as.integer(4.5)

#vectors (character, numeric , logical)
score <- c(4,2,3,5)
player <- c("A","B","C","D")
names(score) <- player

#or
remain <- c(spades = 11, hearts = 12, diamonds = 11, clubs = 13)
remain
str(remain)
my_apple <- 5
my_oranges <- "hello"
is.vector(my_apple)
is.vector(my_oranges)

#vectors of length 1
length(my_apple)

# vectors holds homogeneous elements
# Atomic Vectors < > lists
# Automatic coercion in vectors to make elemenst homogeneous
#computation are performed element-wise
earnings <- c(50, 100, 75) 
earnings*2
expences <- c(30, 70, 100)
budget <- earnings - expences
budget
sum(budget)
earnings>expences

#subsetting vectors
#using index
remain[1]

#using name
remain["spades"]
remain_black <- remain[c(1,4)]
remain_black
remain_red <- remain[c("hearts","diamonds")]
remain_red

#all but index 1 are retirmed
remain[-1]
remain[-c(1,2)]

#subset using logical vector
left <- c(FALSE, TRUE, FALSE, TRUE)
selection_remain <- remain[left]
selection_remain

#recycling of elements 
remain[c(TRUE, FALSE)]

#create and name matrix ---------------------------------------------------------------
# Vector: 1D array of data elements
# Matrix: 2D array of data elements
# one atomic vector type

matrix(1:6, nrow = 2)
matrix(1:6, ncol = 2)
matrix(1:6, nrow = 2, byrow = TRUE)

#recycling
matrix(1:3, nrow = 2, ncol = 3)
matrix(1:4, nrow = 2, ncol = 3)

#cbind(), rbind()
#easy way to create matrices in some cases.
cbind(1:3, 1:3)
rbind(1:3, 1:3)
m <- matrix(1:6, byrow = TRUE, nrow = 2)

#adding row to the existing matrix
rbind(m, 7:9)
cbind(m, c(10,11))

#naming the matrices rownames(), colnames()
rownames(m) <- c("row1", "row2")
colnames(m) <- c("col1", "col2", "col3")

m_name <- matrix(1:6, byrow = TRUE, nrow = 2,
          dimnames = list(c("rowa","rowb"), c("colc", "cold", "cole")))

#matrix containing single atomic vector types.
#coercion automatically occurs
num <- matrix(1:8, ncol = 2)
char <- matrix(LETTERS[1:6], nrow = 4, ncol = 3)

#bind these matrices in column
cbind(num, char)
#for multidimensional matrix containing different element use data.frame or list

## subset matrices---------------------------------------------------------------------
m <- matrix(sample(1:15,12), nrow = 3)
m[1,3]

#subsetting of row or column
m[3,] #selection of third row
m[,3]
m[4] #linearly select 

#subsetting multiple elements
m[2,c(2,3)] #select second row and select 2md and 3rd column elements
m[c(1,2),c(2,3)] #submatrix
m[c(1,3), c(1,3,4)]

#subsetting by names
m_name[2,3]
m_name["rowb","cole"]
m_name[2,"cold"]
m_name[2, c("colc","cole")]

#subsetting with logical vectors FTFT (recycling)
m_name[c(FALSE,TRUE), c(FALSE, TRUE)]


#M atrix Arithmetic----------------------------------------------------------------------
#sum of column and store it as a vector
#lord of the ring sales in $(dollars)
the_fellowship <- c(316,556)
two_towers <- c(343, 584)
return_king <- c(378, 742)
lotr_matrix <- rbind(the_fellowship, two_towers, return_king)
colnames(lotr_matrix) <- c("US", "non-US")
rownames(lotr_matrix) <- c("Fellowship", "Two Towers", "Return King")
#convert the sales into euros
lotr_matrix/1.12 #element-wise operations
#theater_cut <- matrix(c(50,80,100), nrow = 3, ncol = 2)
theater_cut <- cbind(c(50,80,100), c(50,80,100))
lotr_matrix - theater_cut
#recycling 
lotr_matrix - c(50,80,100)
#matrix multiplication
rates <- matrix(c(1.11, 0.99, 0.82), nrow = 3, ncol = 2)
#converting to euros
lotr_matrix * rates



### Using Factors ----------------------------------------------------------------------
# categorical variables stored as vectors
blood <- c("A","B","AB","O","B","AB","O","B")
blood_factors <- factor(blood)
blood_factors
# simple label encoding to save memory
str(blood_factors)
#order levels 
blood_factor2 <- factor(blood, levels = c("O","A","B","AB"))
str(blood_factor2)
#renaming factor levels
levels(blood_factors) <- c("BT_A", "BT_AB","BT_B","BT_O")
factor(blood,
       levels = c("O", "A", "B", "AB"),
       labels = c("BT_O", "BT_A", "BT_B", "BT_AB"))
#nominal vs ordinal
tshirt_size <- c ("M","L","S","S","L","M","L")
tshirt_size_factor <- factor(tshirt_size, ordered = TRUE,
                             levels = c("S","M","L"))
tshirt_size_factor[2] > tshirt_size_factor[1]

###Lists--------------------------------------------------------------------------------
song <- list("hello ", 190, 5)
is.list(song)
names(song) <- c("title","duration","track")
#name list
song <- list(title = "hello",
             duration = 190,
             track = 4)
str(song) #structure of the list
similar_song <- list(title = "another song",
                     duration = 176,
                     song_another = song)
similar_song

##subsetting the list-------------------------
similar_song[[1]]
similar_song[[c(3,1)]] #returns the fisrs element of list index 3
similar_song[[3]][[1]] #returns the same
similar_song[["duration"]]
similar_song["duration"]
similar_song[c("duration","song_another")]

# $ and extension only works in named list
similar_song$duration

friends <- c("A","B","C","D","E")
similar_song$sent <- friends
similar_song$song_another$track <- 5
similar_song 
## [[to select list element]] and $ to subset and extend lists
## [results in sublist]


##Exploring the dataframe---------------------------------------------------------------
#data frame
#create/ import from data source
#csv, SQL, Excel, SPSS 

name <- c("A","B","C","D","E")
age <- c(28,30,21,39,35)
child <- c(FALSE,TRUE,TRUE,FALSE, TRUE)
df <- data.frame(name, age , child)
#specifically for datasets vectors should be of same length
#Rows = observations(persons)
#Columns = variables (age, name etc.)
#element of column should be same type (restriction)
##Name the data frame.

names(df) <- c("Name","Age","Child")
str(df)
#to supress the factor behaviour
df <- data.frame(name, age, child,
                 stringsAsFactors = FALSE)
str(df)

## subsetting the data frame------------------------------

#[ from matrices ] and [[and $ from the list]] to subset data.frame

df
df[5,3] #[rownumber, column ]
df[3, "age"]
df[2,] #selecting the row
df[,"age"] #selecting the column
df[c(2,5), c("age", "child")]
df[1] #returns the data.frame of column 1

#using list properties
df$child
df[["age"]]  #results in vector instead of data.frame

##Extending Data Frame -------------------------------------
#add columns = add variables
#add rows = add new observation
height <- c(175, 177, 155,164, 159)
df$height <- height # or df[["height"]] <- height
#add column using cbind
weight <- c(78, 54,67,63,59)
cbind(df, weight)

#adding row using rbind
f <- data.frame("F", 23, FALSE, 184 , 61)
f <- data.frame(name="F", age = 23, child= FALSE, height= 172)
rbind(df, f)

#sorting data frame
sort(df$age)
ranks_age <- order(df$age)
ranks_age #index of vector containing lowest value
df[ranks_age, ]
df[order(df$age, decreasing = TRUE),]

###conditional statements in R
if(condition) {
  statement1
}else
  statement2
  {
  
  }

# else if statement b/w if and else

### logical operatior and vectors --------------------------------------
##logical operator
TRUE & TRUE
x <- 4
x > 2 & x < 15 #and operator
TRUE | FALSE
x < 12 | x > 15  # or operator

!TRUE # not operator

c(TRUE, TRUE, FALSE) & c (FALSE, TRUE, FALSE)
c(TRUE, TRUE, FALSE) | c (FALSE, TRUE, FALSE)
!c(TRUE, TRUE, FALSE)

## && and || operator in vectors only considers the first element.

###Relational Operators----------------------------------------------------
#Equality == 
3 == 2 #false

#inequality !=
"hello" != "goodbye"

#relational operators
# < > >= <=
instagram <- c(10, 4, 5, 34, 43, 58)
instagram > 30

facebook <- c(12, 32, 11 , 17, 31, 10)

facebook >= instagram #elementwise comparison


### Function in R
my_fun <- function(x, y= 2) {
  x + y
}

my_fun(2) # 4


#Components of functions
# 1.formal arguments (x, y)
# 2.body (x+y)
# 3.environment (scope)

##function computing absolute value

absolute <- function(x){
  if (x < 0){
    -x
  }else{
    x
  }
}
absolute(-4)

#anonymous function: 
function(x) {x+1}
(function(x) {x+1})(2)

#scoping
x <- 2
vec_creator <- function(){
  y <- 4
  c(x,y)
}
vec_creator()

j <- function(){
  if(!exists("a")){
    a <- 1
  }else{
    a <- a+1
  }
  print(a)
}

j()

#Data structures in R
#1. Atomic vectors (logical, integer, double, character, complex and raw)
#2. Lists a.k.a recursive vectors (can contain heterogenous values)

#Every vector has typeof() and length() properties
  
x <- list("a", "b", 1:10)
length(x)

#missing values (NA's inside the vector)
x <- c(1, 3, 5, NA, 7)

#list
a <- list(
  a = 1:3,
  b = "a string",
  c = pi,
  d = list(2,3,4)
)
a[1:2]
a[4]
a[[4]]
a[[4]][1]
a[[4]][[1]]


#for loops
prime_lists <- list(2,3,5,7,11, 13)
for (i in 1:length(prime_lists)){
  print(prime_lists[[i]])
}

#for looping over data frame
df <- data.frame(
  a = rnorm(10),
  b = rnorm(10),
  c = rnorm(10),
  d = rnorm(10)
)
for (i in 1:ncol(df)) {
  print(median(df[[i]]))
}
  
### Basic graphics

plot()
#plotting Vectors, linear models, kernel densities ...
#1. categorical (bar chart)
#2. numerical (w.r.t index)
#3. 2 numerical (scatter plot)
#4. 2 categorical (stacked barchart)
#5. 

#depending on the data you give, it is generic and gives different output
str(countries)

myData <- read.csv(file.choose(), header = TRUE, sep = ';')

myData$total_quantity <- cbind( myData$A + myData$B+ myData$C)

plot(myData$B)
plot(myData$Month)
plot(myData$Month, myData$Costs)
plot(myData$Costs, myData$total_quantity)
length(myData$Costs) == length(myData$total_quantity)
str(total_quantity)

#to make some relation clear applying logarithmic functions
plot(log(myData$Costs), log(myData$total_quantity))

hist(myData$Costs) #for numeric variables

#other graphical functions
barplot()
boxplot()
pairs()
#etc...

#customizing the plots
plot(myData$Month, myData$Costs,
     xlab = "Months",
     ylab = "Costs",
     main = "Monthly total production costs",
     type = "o", #line and points "l" for only line
     col = "red",
     col.main = "green",
     cex.axis = 0.6, # the axis labels size
     lty = 5, #       line type 1- 6 selection 
     pch = 4) #       plot symbols 1- 35 selection

#parameter specification session wise
par(col = "blue")
plot(myData$Costs, myData$total_quantity)

#Multiple plots
#https://www.youtube.com/watch?v=Z3V4Pbxeahg&list=PLjgj6kdf_snYBkIsWQYcYtUZiDpam7ygg&index=16


par(mfrow = c(2,2)) #2 * 2 grid (4 subplots)
#mfcol to add plots columnwise 
plot(myData$Costs, myData$A)
plot(myData$Costs, myData$B)
plot(myData$Costs, myData$C)

#reset the grid
par(mfrow = c(1,1))
plot(myData$Month, myData$Costs,
     pch=16, col = 2,
     xlab = "Month",
     ylab = "Costs")
lm_costs <- lm(myData$Month ~ myData$Costs)
abline(lm_costs, lwd = 2) # line width
#other function points(), segments(), lines(), text()
ranks <- order(myData$Month)
lines(myData$Month[ranks])



