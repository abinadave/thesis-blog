<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\ReceivingForm as ReceivingForm;

class ReceivingFormController extends Controller
{
    public function fetchByDate(Request $request){
        $date = $request->input('date');
        $receiving_forms = ReceivingForm::where('created_at','like', '%'.$date.'%')->orderBy('id','desc')->get();
        $rids = $receiving_forms->pluck('id');
        $receiving_items = \App\ReceivingItem::whereIn('receiving_form_id', $rids)->get();
        return response()->json([
            'receiving_forms' => $receiving_forms,
            'receiving_items' => $receiving_items,
            'date' => $date
        ]);
    }

    public function insert(Request $request){
    	$this->validate($request, [
            'location_received_from' => 'required',
            'verified_by'    => 'required',
            'received_by'    => 'required'
        ]);
        $form = new ReceivingForm;
        $form->received_by = $request->input('received_by');
        $form->verified_by = $request->input('verified_by');
        $form->location_received_from = $request->input('location_received_from');
        $form->save();
        return $form;
    }
}
