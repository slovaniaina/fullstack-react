import React, { Component } from 'react';
import ActivityItem from './ActivityItem'

class Content extends React.Component{
    render(){
        const {activities} = this.props;
        return (
            <div className="content">
                <div className="line"></div>
                {/* Timeline items */}
                {
                    activities.map(
                        (activity) => {
                            return <ActivityItem activity={activity} />
                        }
                    )
                }
                
            </div>
        )
    }
}

export default Content;