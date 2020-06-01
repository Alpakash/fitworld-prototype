import React from "react";

export const homeHeaderContextDefaultState = {
    homeHeader: {
        filterOpened: true,
        setFilterOpened: (b: boolean) => {
        },
        filters: {
            range: {
                defaultValue: 4000,
                value: 0,
                onValueChanged: (b: number) => {
                },
            },
            date: {
                timeStart: new Date(),
                timeEnd: new Date(),
                showTimeStart: false,
                showTimeEnd: false,
                showStartDate: false,
                showEndDate: false,
                setShowStartDate: (b: boolean) => {},
                setShowEndDate: (b: boolean) => {},
                setShowTimeStart: (b: boolean) => {},
                setShowTimeEnd: (b: boolean) => {},
                startDefaultValue: new Date(),
                endDefaultValue: new Date(),
                start: new Date(),
                end: new Date(),
                onStartDateChange: (a: any, b: any) => {
                },
                onEndDateChange: (a: any, b: any) => {
                },
                onTimeStartChange: (a: any, b: any) => {},
                onTimeEndChange: (a: any, b: any) => {}
            }
        }
    }
};

export const HomeContext = React.createContext(homeHeaderContextDefaultState);
