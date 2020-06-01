import React from "react"

import { Button } from "@netdata/netdata-ui"

import { FirstComponent } from "./styled"

interface Props {

}
export const CustomDashboard = ({

}: Props) => (
  <FirstComponent>
    Custom Dashboard
    <Button
      icon="plus"
      onClick={() => {
        alert("netdata-ui works!")
      }}
    />
  </FirstComponent>
)
