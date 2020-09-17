#Website prediction to do 

read_data <- file.choose()
dataset <- read.csv2(read_data, header = TRUE, sep = ";", dec = ",")

# converting factor to numeric
dataset$Revenue <- as.numeric(as.character(dataset$Revenue))
hits = dataset$Hits.on.web.page
revenue = dataset$Revenue 

#test train split
set.seed(100)
trainingRowIndex <- sample(1:nrow(hits), 0.8*nrow(hits))
trainingData <- hits[trainingRowIndex, ]
testData <- hits[- trainingRowIndex, ]
#
model_web = formula(dataset$Revenue ~ dataset$Hits.on.web.page)
linear_model = lm(model_web, dataset)
summary(linear_model)

distPred <- predict(linear_model, testData)

#plotting the line
scatter.smooth(x=hits, y=revenue, main = "hits ~ revenue")
plot(hits, revenue, main ="Revenue VS Hits on webpage", col = "blue", pch = 16, xlab = "Hits On Webpage", ylab = "Revenue")
abline(linear_model, col = "red")

#boxplot for outliers
par(mfrow=c(1,2))
boxplot(hits, main = "Hits on Web", sub=paste("Outliers rows = ", boxplot.stats(hits)$out))
boxplot(revenue, main = "Revenue", sub=paste("Outliers rows = ", boxplot.stats(revenue)$out))

#calculating other useful infos
cor(dataset$Hits.on.web.page, dataset$Revenue)

# testing on new data
predicted <- predict(linear_model, data.frame(hits = 138))
print(predicted)

## Testing the statistical significance

# p value less than 0.05 (visually interpreted with the stars *** )
# null and alternative hypothesis , the null hypothesis is that the coefficients associated with the variables is equal to zero

# t-value
#We can interpret the t-value something like this. A larger t-value indicates that it is less likely that the coefficient is not equal to zero purely by chance. So, higher the t-value, the better.
#Pr(>|t|) or p-value is the probability that you get a t-value as high or higher than the observed value when the Null Hypothesis (the β coefficient is equal to zero or that there is no relationship) is true. So if the Pr(>|t|) is low, the coefficients are significant (significantly different from zero). If the Pr(>|t|) is high, the coefficients are not significant.
#What this means to us? when p Value is less than significance level (< 0.05), we can safely reject the null hypothesis that the co-efficient β of the predictor is zero. In our case, linearMod, both these p-Values are well below the 0.05 threshold, so we can conclude our model is indeed statistically significant.
#It is absolutely important for the model to be statistically significant before we can go ahead and use it to predict (or estimate) the dependent variable, otherwise, the confidence in predicted values from that model reduces and may be construed as an event of chance.





############################################################################################################################

