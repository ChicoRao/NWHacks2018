<?php
/**
 * Created by PhpStorm.
 * User: Piyotr Kao
 * Date: 2018-01-14
 * Time: 7:54 AM
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AjaxController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     * @param $request
     */
    public function send(Request $request)
    {
        $data = $request->input('test');
        //return response()->json($request->all());
        return redirect()->to('/home')->with('test', $data);
    }
}