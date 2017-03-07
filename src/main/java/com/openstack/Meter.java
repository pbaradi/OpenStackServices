package com.openstack;

public class Meter {
	
	private float inComingByte;
	private float outGoingByte;
	private float totalCost;
	public float getTotalCost() {
		this.totalCost = (float) ((inComingByte + outGoingByte)* (0.001));
		System.out.println(totalCost);
		System.out.println(inComingByte);
		System.out.println(outGoingByte);
		return totalCost;
	}
	public void setTotalCost(float totalCost) {
		this.totalCost = totalCost;
	}
	public float getInComingByte() {
		return inComingByte;
	}
	public void setInComingByte(float inComingByte) {
		this.inComingByte = inComingByte;
	}
	public float getOutGoingByte() {
		return outGoingByte;
	}
	public void setOutGoingByte(float outGoingByte) {
		this.outGoingByte = outGoingByte;
	}
	public Meter(float inComingByte, float outGoingByte) {
		super();
		this.inComingByte = inComingByte;
		this.outGoingByte = outGoingByte;
	}

}
