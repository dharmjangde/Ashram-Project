import React from 'react';
import ltCss from './latest.module.css';
import item1 from './item1.jpg';
import item2 from './item2.jpg';   
import item3 from './item3.jpg';
import item4 from './item4.jpg';
import item5 from './item5.jpg';  
import item6 from './item6.jpg';
import item7 from './item7.jpg';
import item8 from './item8.jpg';
const latestItems = [
  {
    img: item1,
    title: 'Baishakh Month Challenge Challenge Challenge Jan 12 Update: As Wildfires Continue to Ravage So Cal, ',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",

  },
  {
    img: item2,
    title: 'Inspiring Words by Devotee',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  },
  {
    img: item3,
    title: 'Indian Community Forum',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  },
  {
    img: item4,
    title: 'Food Relief in Action',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  },
  {
    img:item5,
    title:'Ukrane Food for Life: Provideing meals and Hope in Kyiv',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  },
   {
     img:item6,
    title:'Ukrane Food for Life: Provideing meals and Hope in Kyiv',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
   },
   {
     img:item7,
    title:'Ukrane Food for Life: Provideing meals and Hope in Kyiv',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  },
  {
    img:item8,
    title:'Ukrane Food for Life: Provideing meals and Hope in Kyiv',
    date: "March 20, 2025",
    description: "We offered free checkups to 500+ rural residents.",
  }
];

const LatestContent = () => {
  return (
    <section className={ltCss.latestsection}>
      <div className={ltCss.latestheader}>
        <h2>Latest Content</h2>
        <a href="/latest">View All</a>
      </div>
      <div className={ltCss.latestgrid}>
        {latestItems.map((item, idx) => (
          <div className={ltCss.latestcard} key={idx}>
            <img src={item.img} alt={item.title} />
            <div className={ltCss.contenttitle}>{item.title}</div>
            <div className={ltCss.description}>{item.description}</div>
            <div className={ltCss.date}>{item.date}</div>
          </div>
        ))}
      </div>   
    </section>
  );
};

export default LatestContent;
