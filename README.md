# World Energy Trends (1990-2020)
Group Project #3

Team: Jiamin Li, Anuja Panthari, Kelsey Brantner, Rikin Patel, and Laura Jordan

## Background
Our dataset includes world energy data from 1990-2020 for 44 countries. Energy types captured include CO2 emissions, total energy consumption, natural gas production, electricity consumption, wind/solar energy, and coal ignition production. We will be looking at how energy consumption and production has changed by country, over time. This is important because it will reveal not only the present state of energy consumption, but can be used to predict the future of different types of energy consumption. We can use historical benchmarks (2016 Paris Agreement, Covid pandemic) to predict when potential outliers/trends have occurred. 

Energy is needed to power our world, but (as we know), climate change and lasting effects on the health of the living beings have devastating effects. Analyzing and understanding energy trends will allow us to shape the future of our planet’s health. 

## Dataset
The data set used for this project can be found at: https://www.kaggle.com/datasets/shub218/energy-data-1990-2020?select=Energy+data+1990+-+2020.csv

## Questions and Key Findings
1. How’s energy production and consumption changing year over year?
   * The total energy production have increased by 58% from 7,851 mtoe to 12,375 mtoe.
   * The total energy consumption have increased by 57% from 7,635 mtoe to 11,968 mtoe.
   * For reference: the population increased by 47% and global GDP soar up by 274% for the last 3 decades. 
2. How do energy trends differ between fossil fuel type?
   * Across the 30 years, US, Russia, India and China had the highest overall consumption across all fossil fuel energy types.
   * Oil and coal consumption has decreased in US and Russia, while natural gas has increased
   * In India and China all three sources have increased, but natural gas still stays on the lower end
3. What has been the impact of the Paris Agreement?
   * Of the top 10 CO2 emitters in 2010, only the United States, Japan, Germany, and the United Kingdom have made progress towards the 2030 emissions goal
4. Has any recent historical event severely impacted energy/electricity consumption?
   * Looking at Covid and mining (Bitcoin), these two did not cause any impact on energy/electricity consumption. However, the only correlation we determined in energy/electricity consumption was the worldwide population increase.
5. Which countries are producing the most renewable electricity?
   * Norway has the highest percentage of electricity produced using renewable resources. Norway had 98.37% of their electricity pruced from renewables (hydro, wind, geothermal and solar).
   * Brazil and New Zealand also had very high percentages of their electricity produced using renewable resources.
Brazil: 84.1%
New Zealand: 80.01%

## Support
To complete this assignment, we attended class, reviewed notes, attended office hours and utilized tutoring sessions. We also consulted, troubleshot and shared code amongst the team. Additionally, we used outside sources for assistance. One resource that was heavily consulted for part of this project was the YouTube channel Data Science for Everyone. We also used the Javascript plotly website to assist in coding our map animation. 

The following site was referenced for help with our flask API
https://stackoverflow.com/questions/10372883/simple-flask-application-that-reads-its-content-from-a-html-file-external-styl

## Submission Includes 
* Proposal - Google Doc Link: https://docs.google.com/document/d/1YnERv2AvJth-A70WNX9ygoJ3A8_FFP9W2N04FEKUF0k/edit#heading=h.avm86vbj4ny
* Dataset - Kaggle Link: https://www.kaggle.com/datasets/shub218/energy-data-1990-2020?select=Energy+data+1990+-+2020.csv
* SQL - query_energy_sources.sql (used PGAdmin PostGres)
* Flask: "flask" folder contains all of our final documents, including updated HTMLs that run on Flask. This is the code and data needed to run our dashboard page with multiple user driven interactions
* Final Code: Final code can be found in either the "flask" folder or "Project3-Final" folder
* HTML/CSS: "Project3-Final" folder for the HTML version (including the CSS file) of the presentation
* To note JavaScript library not shown in class can be found in the "flask" folder --> "static" folder --> plotK.js
  * ChartJS was used

## References
* GDP: https://www.macrotrends.net/countries/WLD/world/gdp-gross-domestic-product <br>
* Population: https://www.macrotrends.net/countries/WLD/world/population
* code for animated map based off of: https://plotly.com/javascript/map-animations/
* The following site was where most of our information about the Paris Agreement came from
https://www.un.org/en/climatechange/paris-agreement
