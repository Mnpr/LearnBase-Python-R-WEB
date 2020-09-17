# +++++++++++++++++++++ question 1 +++++++++++++++++++++++++ 

file <- file.choose()
data_prod <- read.csv2( file ,header = TRUE, sep = ";")

costs <- data_prod$Costs
a <- data_prod$A
b <- data_prod$B
c <- data_prod$C

stat_rel <- costs ~ a+b+c

lm_cost <- lm(stat_rel, data = data_prod)
summary(lm_cost)
#plot(costs ~ a+b+c)
#plot
par(mfrow=c(2,2))

plot(costs ~ a+b+c)
abline(lm_cost, col = "red")
#plot(x=costs, y=a)
#plot(x=costs, y= b)
#plot(x=costs,  y=c)

my_fun <- function(x1,x2,x3){ 
  Costs <- (35102.900 + 2.066*x1 +4.176*x2 + 4.791*x3)}

print(my_fun(800,700,600))

## Interpretition
# p-value of the F-statistics 0.001 which mean atleast one of the predictor variables is signicantlz
# related to outcome variable

# to see which variables are significant
summary(lm_cost)$coefficients

#For a given predictor variable, the coefficient (b) can be interpreted as the average effect on y of a
#one unit increase in predictor, holding all other predictors fixed.

#other useful functions

coefficients(lm_cost) # model coefficients
confint(lm_cost, level = 0.95) #confidence interval for model parameters
fitted(lm_cost)
residuals(lm_cost)
anova(lm_cost) #analysis of variance table
vcov(lm_cost) #covariance matrix for model parameters
influence(lm_cost)

#diagonastic plots
layout(matrix(c(1,2,3,4),2,2))
plot(costs, fitted(lm_cost))

#comparing models
lm_cost1 <- lm(costs ~ a+b+c, data = data_prod)
lm_cost2 <- lm(costs ~ a+b, data = data_prod)
anova(lm_cost1, lm_cost2)



# ++++++++++++++++++++++++++++++++ question 2 --------------------------------

#ARIMA model
#A
file_new <- file.choose()
data_revenue <- read.csv2(file_new, header = TRUE, sep = ";")
year <- data_revenue$Year
revenue <-data_revenue$Revenue..in.million... 

par(mfrow=c(1,2))
RevenueTimeSeries <- ts(revenue, start = c(1999,1), frequency = 1)
RevenueTimeSeries
plot.ts(RevenueTimeSeries, ylab = "Revenue(in million $)", xlab = "Year", type = "b", col="red")

#-----------------------------------xx--------------------------------------------------
#B


#-----------------------------------xx--------------------------------------------------
#C
#making a data stationary

library(tseries)
#Augmented Dickey-Fuller Test (adf test) A p-Value of less than 0.05 in adf.test() indicates that it is stationary.
adf.test(RevenueTimeSeries) #not stationary
revenue_seasdiff <- diff(revenue, lag=frequency(revenue), differences=1)
plot(revenue_seasdiff, type="l", main="Seasonally Differenced") 
ndiffs(revenue_seasdiff) # number of differences need to make it stationary
stationaryTS <- diff(revenue_seasdiff, differences= 1)
plot(stationaryTS, type="b",col = "red", main="Differenced and Stationary")
#-----------------------------------xx--------------------------------------------------
#D
library(forecast)
fit_revenue <- auto.arima(RevenueTimeSeries)
fcast_revenue <- forecast(fit_revenue, h = 1)

print(fcast_revenue)
forecast::autoplot(fcast_revenue, xlab = "Time", ylab = "Revenue(in million $)")
accuracy(fit_revenue)


#´´´´´´´´´...............question 3´´´´´´´´´´...................................

file <- file.choose()
customer_data <- read.csv2(file, header = TRUE, sep = ";") 
View(customer_data)














#b
decomposedRev <- decompose(RevenueTimeSeries) # use type = "additive" for additive components
plot(decomposedRev, ylab = "Revenue(in million $)", xlab = "Year", type = "b", col="red") # see plot below
stlRes <- stl(RevenueTimeSeries, s.window = "periodic")
stlRes
