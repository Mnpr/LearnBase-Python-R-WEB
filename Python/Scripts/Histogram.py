import numpy as np
import matplotlib as mlab
import matplotlib.pyplot as plt

mu = 100
sigma = 15
x = mu + sigma * np.random.randn(10000)

num_bins = 50
n, bins, patches = plt.hist(x, num_bins, facecolor='green', alpha=0.5)

# Line Best-Fit
y = mlab.normpdf(bins, mu, sigma)

plt.plot(bins, y, 'r--')
plt.xlabel('Smarts')
plt.ylabel('Probability')
plt.title(r'Histogram of IQ: $\mu=100$, $\sigma=15$')

plt.subplots_adjust(left=0.15)
plt.show()