**Project_2_Visualization: dj_branch**

Files:

- `athlete_events.csv`: Kaggle - Olympics data

- `data.ipynb`: Jupyter notebook to transform Kaggle - Olympics data

- `Female-Sports`: Directory for Female gold, silver, bronze medallists data(csv)

- `Male-Sports`: Directory for Male gold, silver, bronze medallists data(csv)

- `female-sport-events.ipynb`: Jupyter notebook to transform Female-Sports data(gold, silver, bronze)

- `Female-Events`: Directory for body composition and age for gold, silver, bronze medallists data(csv and json)

Disclaimers/Notes:
- Transformation of data:
	- Does not include 1 Olympian only for a Gold, Silver, and Bronze medal for that event (For example, Gymnastics Women's Team Portable Apparatus during 1956 Summer Olympics only has one gold medalist for all of 1920 to 2016, so this is not included in the datset)
	- Teams that recieve medals are counted for each medal and not by one medal. (For example, if 4 people on a team recieve gold medals, data will count 4 gold medals)