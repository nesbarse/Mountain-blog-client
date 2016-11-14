/* 
 * Copyright (c) 2015 by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com)
 * 
 * openAUSIAS: The stunning micro-library that helps you to develop easily 
 *             AJAX web applications by using Java and jQuery
 * openAUSIAS is distributed under the MIT License (MIT)
 * Sources at https://github.com/rafaelaznar/
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
'use strict';
moduloDocumento.controller('DocumentoViewController', ['$scope', '$routeParams', 'serverService', '$location',
    function ($scope, $routeParams, serverService, $location) {
        $scope.title = "Vista de documento";
        $scope.icon = "fa-file-text-o";
        $scope.ob = 'documento';
        $scope.id = $routeParams.id;
        serverService.get('ob=maxi_documento&page=1&rpp=100&filter[]=id,equa,' + $scope.id).then(function (result) {
            if (result) {
                if (result.status == 200) {
                    $scope.bean = result.data.message.rows[0];
                    $scope.queryregisters = result.data.message.queryregisters;
                    $scope.totalregisters = result.data.message.totalregisters;
                }
            } else {
                $scope.status = "Error en la recepción de datos del servidor";
            }
        })
        $scope.close = function () {
            $location.path('/home');
        };
        $scope.plist = function () {
            $location.path('/documento/plist');
        };
        $scope.back = function () {
            window.history.back();
        };
    }]);