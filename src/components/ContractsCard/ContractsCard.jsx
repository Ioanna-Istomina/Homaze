import React from 'react';
import s from './ContractsCard.module.css';


function ContractsCard({item}) {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });

    return (
        <div  className={s.cardContainer}>
             <div className={s.dataContainer}>
            <div className={s.nameContainer}>
                {item.customerName?<p className={s.customerName}>{item.customerName}</p>: <p className={s.untitledUser}>Untitled</p>}
                <p className={s.projectId}>ID: {item.projectId}</p>
            </div>
           
                <p className={s.address}>{item.address}</p>
                <div className={s.roomsContainer}>
                    {item.rooms.map(room=><div key={room.id}><p className={s.room}>{room.name}</p></div>)}
                </div>
                <div className={s.container}>
                    <div className={s.titleContainer}>
                        <p className={s.title}>
                        Last updated
                        </p>
                        <p className={s.time}>{new Date(item.updated_timestmp).toLocaleString().slice(0,10).replaceAll("/",".")}</p>
                    </div>
                    <div className={s.titleContainer}>
                        <p className={s.title}>
                        Total
                        </p>
                        <p className={s.price}>{formatter.format(item.totalProject)}</p>
                    </div>
                     <div className={s.stageContainer}>
                        <p className={s.title}>
                        Stage
                        </p>
                        {item.projectState=== "In progress" && <p className={s.stageProgress}>{item.projectState}</p>}
                        {item.projectState=== "Done" && <p className={s.stageDone}>{item.projectState}</p>}
                        {item.projectState=== "Cancelled" && <p className={s.stageCancelled}>{item.projectState}</p>}
                        {item.projectState=== "Negotiation" &&   <p className={s.stageNegotiation}>{item.projectState}</p>}
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ContractsCard;