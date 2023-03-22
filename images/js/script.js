// Copyright (c) 2023 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('base').value)
  const width = parseInt(document.getElementById('hight').value)

  // process
  const area = base * height /2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
