import { Header, DesktopNav, Footer, Cart, Orders } from "../../components";
import React from 'react'


function MyOrders(props) {
    return (
        <>
            <Cart { ...props } />
            <Header />
            <DesktopNav { ...props } />
            <main>
                <div id="my-orders-wrapper">
                    <Orders type="Active" isStaff={false} userEmail={props.user.email}/>
                    <Orders type="Past" isStaff={false} userEmail={props.user.email}/> 
                </div>
            </main>
            <Footer />
        </>
    )
}

export default MyOrders;