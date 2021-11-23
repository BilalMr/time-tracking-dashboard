/*
 * Copyright © 2021 EPAM Systems, Inc. All Rights Reserved. All information contained herein is, and remains the
 * property of EPAM Systems, Inc. and/or its suppliers and is protected by international intellectual
 * property law. Dissemination of this information or reproduction of this material is strictly forbidden,
 * unless prior written permission is obtained from EPAM Systems, Inc
 */

const activities = [
  {
    title: 'Work',
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: 'Play',
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: 'Study',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: 'Exercise',
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: 'Social',
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: 'Self Care',
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

const allCards = document.getElementsByClassName('activity-card');

const daily = document.getElementById('daily');

daily.addEventListener('click', () => {
  daily.classList.add('active');
  monthly.classList.remove('active');
  weekly.classList.remove('active');
  for (let index = 0; index < allCards.length; index++) {
    const current = activities[index].timeframes.daily.current;
    const previous = activities[index].timeframes.daily.previous;

    const element = allCards[index];
    element.children[0].children[1].children[0].innerHTML =
      current + (current == 1 ? 'hr' : 'hrs');
    element.children[0].children[1].children[1].innerHTML =
      'Yesterday - ' + previous + (previous == 1 ? 'hr' : 'hrs');
  }
});

const weekly = document.getElementById('weekly');

weekly.addEventListener('click', () => {
  daily.classList.remove('active');
  monthly.classList.remove('active');
  weekly.classList.add('active');
  for (let index = 0; index < allCards.length; index++) {
    const current = activities[index].timeframes.weekly.current;
    const previous = activities[index].timeframes.weekly.previous;
    const element = allCards[index];
    element.children[0].children[1].children[0].innerHTML =
      current + (current == 1 ? 'hr' : 'hrs');
    element.children[0].children[1].children[1].innerHTML =
      'Last Week - ' + previous + (previous == 1 ? 'hr' : 'hrs');
  }
});

const monthly = document.getElementById('monthly');

monthly.addEventListener('click', () => {
  daily.classList.remove('active');
  monthly.classList.add('active');
  weekly.classList.remove('active');
  for (let index = 0; index < allCards.length; index++) {
    const current = activities[index].timeframes.monthly.current;
    const previous = activities[index].timeframes.monthly.previous;
    const element = allCards[index];
    element.children[0].children[1].children[0].innerHTML =
      current + (current == 1 ? 'hr' : 'hrs');
    element.children[0].children[1].children[1].innerHTML =
      'Last Month - ' + previous + (previous == 1 ? 'hr' : 'hrs');
  }
});
