import { Injectable } from '@angular/core';
import { GridConfiguration, Condition, GridCondition, FilterType, GridFilter } from '..';
import { GridConfig, UpdateJSON, ConditionObject } from '../models';
import { UserDetail } from '@app/core/models/user-detail';

@Injectable({providedIn: 'root'})
export class UtilityService {
  constructor(private userDetail: UserDetail) {}

  public generateGridConfig(config: GridConfiguration): GridConfiguration {
    config.PageNumber = config.PageNumber || 0;
    config.PageSize = config.PageSize || 99;
    config.SortColumn = config.SortColumn || '-1';
    config.SortOrder = config.SortOrder || 'Asc';
    config.TimeZone = config.TimeZone || new Date().getTimezoneOffset();
    config.ViewName = config.ViewName || 'View 1';
    config.GridFilters = config.GridFilters || [];
    return config;
  }

  public generateGridCondition(condition: Condition, value: string): GridCondition {
    return {Condition: condition, ConditionValue: value}
  };

  public generateGridFilter(
    filterType: FilterType,
    dataField: string, 
    condition?: Condition, 
    conditionValue?: string,
    operator: 'And' | 'Or' = 'Or'): GridFilter {
    const filter: GridFilter = {
      DataField: dataField,
      LogicalOperator: operator,
      FilterType: filterType,
      GridConditions: []
    };
    if (condition && conditionValue) {
      filter.GridConditions.push(this.generateGridCondition(condition, conditionValue));
    };
    return filter;
  }

  public genereateConditionObject(obj: ConditionObject): ConditionObject {
    return {
      Name: obj.Name,
      IsEnable: obj.IsEnable !== null ? obj.IsEnable : true,
      IsVisible: obj.IsVisible !== null ? obj.IsVisible : true,
      IsRequired: obj.IsRequired !== null ? obj.IsRequired : true,
      isHideFromStageState: obj.isHideFromStageState !== null ? obj.isHideFromStageState : false,
      ...obj,
    }
  }

  public generateUpdateJson(
      transactionId: string, 
      data: {[key: string]: any},
      processName?: string,
      triggerName?: string,
    ): UpdateJSON {
    const { UserName } = this.userDetail;
    return {
      Identifier: {
        Name: null, 
        Value: null,
        TrnsctnID: transactionId,
      },
      ProcessName: processName || sessionStorage.getItem('processName'),
      StateType: 'Normal',
      TriggerName: triggerName || 'Save Data',
      UniqueConstraints: '',
      UserName,
      Data: [data]
    }
  }

}
