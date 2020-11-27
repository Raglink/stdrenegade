import React from "react"
import { createStackNavigator } from "react-navigation-stack"

import Programs from "./Programs"
import ProgramsDetails from "./ProgramsDetails"
import StreamersDetails from "../streamers/StreamersDetails"
import {ProgramRoutes ,StreamerRoutes} from "../routes"
import Header from "../../components/Header"


export default createStackNavigator(
    {
        [ProgramRoutes.programsHome]: Programs,
        [ProgramRoutes.programsDetails]: ProgramsDetails,
        [StreamerRoutes.streamersDetails]: StreamersDetails,
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            const { params = {} } = navigation.state
            const { scrollContentYOffset } = params
            return {
                header: ({ scene }) => (
                    <Header
                        navigation={navigation}
                        scrollContentYOffset={scrollContentYOffset}
                        shouldShowBackButton={scene.route.routeName !== ProgramRoutes.programsHome}
                        params={params}
                    />
                ),
            }
        },
    }
)
