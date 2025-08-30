export default function Loading() {
    return (
        <>
            {/* Preloader Start */}
            <div className="preloader">
                <div className="loading-container">
                    <div className="loading" />
                    <div id="loading-icon">
                        <img src="assets/img/logo/logo-atlas-it.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* Preloader End */}
        </>
    );
}
