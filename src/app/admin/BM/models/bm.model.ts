import { StatusString } from ".";

export interface BusinessModel {
  id:                 string;
  Name:               string;
  DisplayName:        string;
  Version:            string;
  Mode:               string;
  IntegrateWorkspace: string;
  Description:        string;
  BMId:               number;
  Share:              Share[];
  ProcessName:        string;
  Children:           string[];
  Status:             StatusString;
  EnableLoad:         string;
  ProcessId?:         string;
  selectedBMOG?:      string;
  selectedBMO?:       string;
  selectedDMOG?:      string;
}

export interface Share {
  key: string;
  value: string;
}