import styles from './Home.module.css'
import bmw1 from '../../../../public/bmw1.jpg'

function Home() {
    return (
        <div>
            <h1>Cars catalog</h1>
            <div>
                <div className={styles.item}>
                    <div className={styles.image}
                         style={
                             {
                                 backgroundImage: 'url(/bmw1.jpg)'
                             }
                         }>
                    </div>
                    <h2>Car 1</h2>
                    <p>$100 000</p>
                    <button>Read more</button>
                </div>
            </div>
        </div>
    )
}

export default Home
