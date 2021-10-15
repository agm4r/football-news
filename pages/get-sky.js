const GetSky = () => {
    return ( 
        <div className="container">
            <div className="image">
                <img width="100%" src="get-sky.png" alt="Get Sky Sports"/>
            </div>
            <h1 className={styles.title}>Complete Sky Sports - get all 8 dedicated channels and enjoy a feast of exclusively live sporting action.</h1>

            <div className={styles.wrapper}>
                <button className={styles.button}>Upgrade to Sky Sports</button>
                <button className={styles.button}>Join Sky TV</button>
            </div>
        </div>
     );
}
 
export default GetSky;