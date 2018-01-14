<?php
/**
 * Created by PhpStorm.
 * User: Piyotr Kao
 * Date: 2018-01-13
 * Time: 10:46 PM
 */
?>
        <!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

    <script
            src="https://code.jquery.com/jquery-3.2.1.min.js"
            integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
            crossorigin="anonymous">

    </script>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>

    <script type="text/javascript">
        $(document).ready(function () {
            $('#btn').on('click', function (e) {
                //e.preventDefault();

                $.ajax({
                    type: 'POST',
                    url: 'testSend',
                    data: {
                        id: '1',
                        name: 'Bill'
                    },
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                    },
                    error: function (data) {
                        console.log('Error:', data);
                    }
                });
            });
        });
    </script>
</head>
<body>
<div class="flex-center position-ref full-height">
    <div class="content">
        <form action="{{url ('/home')}}" method="post"> <!--enctype="multipart/form-data"-->
            <button type="submit" id="btn">Submit</button>
        </form>
    </div>
</div>
</body>
</html>