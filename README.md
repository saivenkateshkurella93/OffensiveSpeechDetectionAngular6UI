# Offensive Language Detection Web Application UI in Angular 6
Offensive Language Detection Web Application UI in Angular 6

As the number of people using social media increases,
offensive language is widespread in any social media
like Twitter, Facebook. Hate speech has been increasing in recent
years. As this topic is getting popular among many researchers
in the machine learning field, we will also explore the viability
of this project and improve as we move forward. This project
will utilize the publicly available crowd-sourced data and train
on it using supervised deep learning techniques to identify any
offensive language present in a text.

People who use online services tend to be more aggressive
than in real life. Mostly because people don’t know each other
in virtual environments. Hating each other leads to fight and
more severe and uncomfortable situations. Identifying these
types of behavior on many online tweets or posts and creating
an alert system will provide security to everyone.

There is no online service as such at the moment so that anyone
can utilize this kind a service. So, our project’s RESTful
service and client will allow us to develop a product(Software
As a Service) so that we can offer this service to any individual
or business organization who would like to utilize such a
service.

The online platforms and social media has become hot
points for people to be outrageous and post anything that
might offend certain group of people or organizations, hateful
counting swear words. Hating each other leads to fight and
more severe and uncomfortable situations. Identifying these
types of behavior on many online tweets or posts and creating
an alert system will provide security to everyone. This System
helps to censor the posts and helps to keep a check on what is
being posted by anyone in the web. The application will help
anyone to check the tone of the post that is being posted in
the social media.

Despite having multiple ways to approach this particular
problem, we primarily focus on the identification of the
provided text using Python and deep learning techniques like
Recurrent Neural Network. After referring multiple research
papers on this topic, we realized that there are many neural
techniques that are better and suitable for such type of classifications.

The dataset consists data categorized into tweet and three
classes which are hateful, offensive and neither and some
attributes that describes some important features of the data.


First of all, all stopwords(english) and irrelevant data like
punctuations, twitter handles are removed before constructing
the feature vector. We used the module TfidfVectorizer
provided by scikit-learn package to create unigram, bigram,
trigram and 4-gram features weighted by its TFIDF, short for
frequency - inverse document frequency. For the above dataset
it generates a feature vector of (14869, 243837) dimensions.

With the current dataset, we have decided that it will be
more suitable to use a Maxent Model(Logistic Regression)
with L2 regularization. However, we also experimented with
different classifiers such as MultinomialNB (Naive Bayes),
LinearSVC (Support Vector Machines), and SGDClassifier
(Stochastic Gradient Descent) by using the above same feature
vectors.

