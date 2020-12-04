import {ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

export const Loader = ({color, style, show}) => (
    <ActivityIndicator animating={show} size={'large'} color={color} style={style} />
  )