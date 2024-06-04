// import _ from 'lodash'
import React from 'react'
// import React, { Component, createRef } from 'react'
import { List, Segment } from 'semantic-ui-react'
// import { Header, Image, List, Rail, Segment, Sticky } from 'semantic-ui-react'
export default function Footer() {
    return (<>

        <Segment textAlign="buttom" id="footer">

            <div>
                <List class="footer-item">
                    <List.Item className="text" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}
                    >:לפרטים נוספים, צרו קשר איתנו</List.Item>

                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>טלפון: 050-1234567</List.Item>
                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>[כתובת אימייל שהוסרה] :דוא"ל</List.Item>
                    <List.Item className="text" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}>[https://www.example.com](https://www.example.com) :אתר</List.Item>

                    <List.Item className="text" as="h2" style={{
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "flex-end",
                        justifyContent: "space-between"
                    }}> !עובדים מרוצים, עסק מצליח</List.Item>
                </List>
            </div>

        </Segment >
    </>);
}

