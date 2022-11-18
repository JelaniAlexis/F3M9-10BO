import React from 'react';
import Navbar from '../Navbar/Navbar';
import CollectionNavbar from '../../data/navbars/CollectionNavbar';
import './Collection.scss';

class Collection extends React.Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return(
            <>
                <Navbar content={CollectionNavbar}/>
                <main className="collection">
                    <div className="filters">
                        <button className="filter">Filter #1</button>
                        <button className="filter">Filter #2</button>
                    </div>

                    <section className="items"></section>
                </main>
            </>
        )
    }
}

export default Collection;