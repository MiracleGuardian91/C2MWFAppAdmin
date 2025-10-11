import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MessageService } from '@app/core';

import { ShowNodeDetailsComponent } from '../show-node-details/show-node-details.component';
import $ from 'jquery';
import 'jstree';
import { Title } from '@angular/platform-browser';
import { wfcompareService } from '@app/admin/core/services/wf-compare-services';
import { UserApiService } from '@app/admin/core/services/user-api.service';
@Component({
  selector: 'app-wf-compare',
  templateUrl: './wf-compare.component.html',
  styleUrls: ['./wf-compare.component.scss']
})
export class WfCompareComponent implements OnInit {
  formLeft: FormGroup;
  formRight: FormGroup;
  ProcessDetails: FormGroup;

  IsAuthenticationExpaned: boolean = true;
  submittedLeft: any;
  submittedRight: any;
  LeftEnvironment: any;
  RightEnvironment: any;
  LeftAccessToken: string;
  RightAccessToken: string;

  Environments: any = [];
  ProcessNamesLeft: any = [];
  ProcessNamesRight: any = [];
  WorkFlowLeft: any = [];
  WorkFlowRight: any = [];
  LefttreeData: any = [];
  RighttreeData: any = [];
  matchedNodes: any = [];


  IsShowtree: any;
  CountData: any;
  StageStateCondCount: any;
  PermissionCounts: any;
  scrollPosition = 0;
  treeConfig: any;
  ChangeLabel: string;
  CompareButtonName: string;
  CompareFor: number;

  STAGE : Set<number> = new Set();
  STATE : Set<number> = new Set();
  TRIGGER : Set<number> = new Set();
  COND : Set<number> = new Set();
  
  bmIdLeft: any;
  bmIdRight: any;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly service: wfcompareService,
    private readonly auth: UserApiService,
    private readonly msg: MessageService,
    private readonly toastr: ToastrService, private readonly titleService: Title) {
   
    this.formLeft = this.formBuilder.group({
      EnvironmentLeft: [null, [Validators.required]],
      usernameLeft: ['', [Validators.required]],
      passwordLeft: ['', [Validators.required]]
    });

    this.formRight = this.formBuilder.group({
      EnvironmentRight: [null, [Validators.required]],
      usernameRight: ['', [Validators.required]],
      passwordRight: ['', [Validators.required]]
    });

    this.ProcessDetails = this.formBuilder.group({
      PrcessNameLeft: [null, [Validators.required]],
      PrcessNameRight: [null, [Validators.required]],
      WfNameLeft: [null, [Validators.required]],
      WfNameRight: [null, [Validators.required]],

    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`C2M | Workflow`);
    this.getEnvironmnets();
    this.ChangeLabel = "WorkFlow";
    this.CompareButtonName = "WorkFlow";
    this.CompareFor = 0;
    this.treeConfig = {
      core: {
        "check_callback": true,
        data: [],
      },
      "types": {
        "STAGE": {
          "icon": "../../assets/images/stage.png"
        },
        "STATE": {
          "icon": "../assets/images/state.png"
        },
        "TRIGGER": {
          "icon": "../assets/images/trigger.png"
        },
        "TRIGGER_CONDITION": {
          "icon": "../assets/images/trigger-cond.png"
        },
        "STAGESTATECONDITION": {
          "icon": "../assets/images/dmo-stag.png",
        },
        "PERMISSIONS": {
          "icon": "../assets/images/stage.png",
        }

      },
      "plugins": ["checkbox", "types", "search", "style"],
      search: {
        show_only_matches: true,
        "case_sensitive": false,
        'search_callback': (text: string, node: any) => {
          if (text == 'Matched' || text == 'Unmatched' || text == 'Missing') {
            const className = node.li_attr.class;
            if (className == 'text')
              this.handleSearchCallback(node);
            return className && className.includes(text);
          }

          const containsSearch = text.includes('~Search');
          const searchItem = text.split('~');
          if (containsSearch && searchItem[0] != "") {
            if (node.text.toLowerCase().includes(text.replace("~Search", "").toLowerCase())) {
              return true;
            }
            return false;
          }
          if (node.type === text) {
            this.handleSearchCallback(node);
            return true;
          } else {
            return false;
          }
        }
      },
      checkbox: {
        whole_node: false,
        tie_selection: false,
      },
    };

    $('#left_jstree, #right_jstree').on("loaded.jstree", (e, data) => {
      this.compareAndSetNodeColors();
    });
  }
  getEnvironmnets() {
    this.service.getEnvironmnets().subscribe(res => {
      if (res && res.length > 0) {
        this.Environments = res;
      }
    }, err => {

    })
  }

  getEnvironmentvalueleft(value) {
    this.LeftEnvironment = value;
  }

  getEnvironmentvalueRight(value) {
    this.RightEnvironment = value;
  }
  submitLeft() {
    this.submittedLeft = true;
    if (this.formLeft.valid) {

      this.auth.validateUser(this.formLeft.controls['EnvironmentLeft'].value.Connection, this.formLeft.controls['usernameLeft'].value, this.formLeft.controls['passwordLeft'].value).subscribe(res => {
        if (res && res.accessToken) {
          this.LeftAccessToken = res.accessToken;
          const data = {

            AccessToken: res.accessToken,
            dbLinkId: this.formLeft.controls['EnvironmentLeft'].value.ID,
            dbLink: this.formLeft.controls['EnvironmentLeft'].value.Connection,
            userID: this.formLeft.controls['usernameLeft'].value,
            dbtype: this.formLeft.controls['EnvironmentLeft'].value.DBType
          };


          this.service.getProcessNames(this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl, data).subscribe({
           next: (res: any) => {
            if (res && res.Table.length > 0) {
              this.ProcessDetails.controls['PrcessNameLeft'].setValue(null);
              this.ProcessDetails.controls['WfNameLeft'].setValue(null);
              this.ProcessNamesLeft = res.Table;
            }
          },
          error: (err: any) => { }
        });

 
        }
      })

    } else {
      this.formLeft.markAllAsTouched();
    }
  }

  GetLeftWorkFlow(obj) {
    const Payload = {
      AccessToken: this.LeftAccessToken,
      CompareFor: this.CompareFor,
      dbLinkId: this.formLeft.controls['EnvironmentLeft'].value.ID,
      dbLink: this.formLeft.controls['EnvironmentLeft'].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formLeft.controls['EnvironmentLeft'].value.DBType
    };

    this.service.GetWorkFlow(this.formLeft.controls['EnvironmentLeft'].value.gateway, Payload).subscribe({
    next: (res: any) => {
      this.ProcessDetails.controls['WfNameLeft'].setValue(null);
      if (res && res.Table.length > 0) {
        this.WorkFlowLeft = res.Table;
      }
    },
    error: (err: any) => {}
  });

  }

  submitRight() {
    this.submittedRight = true;
    if (this.formRight.valid) {
      this.auth.validateUser(this.formRight.controls['EnvironmentRight'].value.Connection, this.formRight.controls['usernameRight'].value, this.formRight.controls['passwordRight'].value).subscribe(res => {
        if (res?.accessToken) {
          this.RightAccessToken = res.accessToken;

          const data = {
            AccessToken: res.accessToken,
            dbLinkId: this.formRight.controls['EnvironmentRight'].value.ID,
            dbLink: this.formRight.controls['EnvironmentRight'].value.Connection,
            userID: this.formRight.controls['usernameRight'].value,
            dbtype: this.formRight.controls['EnvironmentRight'].value.DBType
          };


          this.service.getProcessNames(this.formRight.controls['EnvironmentRight'].value.Connection,data).subscribe({
           next: (res: any) => {
            if (res && res.Table.length > 0) {
               this.ProcessDetails.controls['PrcessNameRight'].setValue(null);
              this.ProcessDetails.controls['WfNameRight'].setValue(null);
              this.ProcessNamesRight = res.Table;
            }
          },
          error: (err: any) => { }
        });

        }
      })
    } else {
      this.formRight.markAllAsTouched();
    }
  }

  GetRightWorkFlow(obj) {

    const Payload = {
      AccessToken: this.RightAccessToken,
      CompareFor: this.CompareFor,
      dbLinkId: this.formRight.controls['EnvironmentRight'].value.ID,
      dbLink: this.formRight.controls['EnvironmentRight'].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formRight.controls['EnvironmentRight'].value.DBType
    };

    this.service.GetWorkFlow(this.formRight.controls['EnvironmentRight'].value.Connection, Payload).subscribe({
    next: (res: any) => {
      this.ProcessDetails.controls['WfNameRight'].setValue(null);
      if (res && res?.Table?.length > 0) {
        this.WorkFlowRight = res.Table;
      }
    },
    error: (err: any) => {}
  });
 }

  GetWorkFlows() {

    if (this.CompareFor == 1) {
      this.LoadWFStgSttCondFromDB();
    } else if (this.CompareFor == 2) {
      this.LoadPermissionsDataFromDB();
    }
    else {
      const Payload = {
        dbLinkIdLeft: this.formLeft.controls['EnvironmentLeft'].value.ID,
        dbLinkIdRight: this.formRight.controls['EnvironmentRight'].value.ID,
        dbLinkLeft: this.formLeft.controls['EnvironmentLeft'].value.Connection,
        dbLinkRight: this.formRight.controls['EnvironmentRight'].value.Connection,
        wfIdLeft: this.ProcessDetails.controls['WfNameLeft'].value.WFID,
        wfIdRight: this.ProcessDetails.controls['WfNameRight'].value.WFID,
        processIdLeft: this.ProcessDetails.controls['PrcessNameLeft'].value,
        processIdRight: this.ProcessDetails.controls['PrcessNameRight'].value,
        compareMode: "Offline",
        leftDbType: this.formLeft.controls['EnvironmentLeft'].value.DBType,
        rightDbType: this.formRight.controls['EnvironmentRight'].value.DBType,
        AccessTokenLeft: this.LeftAccessToken,
        AccessTokenRight: this.RightAccessToken,
        leftGatewayUrl:this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl,
        rightGatewayUrl:this.formRight.controls['EnvironmentRight'].value.GatewayUrl
      }

      this.service.LoadWFDataFromDB(this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl, Payload).subscribe({
      next: (result: any) => {
      if (result && result.length > 0) {
        this.IsShowtree = true;
        this.IsAuthenticationExpaned = false;
        this.LefttreeData = JSON.parse(result[0]);

        this.treeConfig.core.data = this.LefttreeData;
        $('#left_jstree').jstree('destroy').empty().jstree(this.treeConfig);
        this.RighttreeData = JSON.parse(result[1]);
        $('#right_jstree').jstree('destroy');
        this.treeConfig.core.data = this.RighttreeData;
        $('#right_jstree').jstree(this.treeConfig);

        this.CountData = result[2];
        this.CountData = JSON.parse(this.CountData);
        this.CountData = this.CountData[0];
        this.BindAllEvents();
        this.compareAndSetNodeColors();
      }
    },
    error: (error: any) => {
      this.IsShowtree = false;
    }
  });

    }
  }


  LoadWFStgSttCondFromDB() {
    const Payload = {
      dbLinkIdLeft: this.formLeft.controls['EnvironmentLeft'].value.ID,
      dbLinkIdRight: this.formRight.controls['EnvironmentRight'].value.ID,
      dbLinkLeft: this.formLeft.controls['EnvironmentLeft'].value.Connection,
      dbLinkRight: this.formRight.controls['EnvironmentRight'].value.Connection,
      wfIdLeft: this.ProcessDetails.controls['WfNameLeft'].value.wfid.split('~')[0],
      wfIdRight: this.ProcessDetails.controls['WfNameRight'].value.wfid.split('~')[0],
      processIdLeft: this.ProcessDetails.controls['PrcessNameLeft'].value,
      processIdRight: this.ProcessDetails.controls['PrcessNameRight'].value,
      compareMode: "Offline",
      leftDbType: this.formLeft.controls['EnvironmentLeft'].value.DBType,
      rightDbType: this.formRight.controls['EnvironmentRight'].value.DBType,
      AccessTokenLeft: this.LeftAccessToken,
      AccessTokenRight: this.RightAccessToken,
      bmIdLeft: this.ProcessDetails.controls['WfNameLeft'].value.wfid.split('~')[1],
      bmIdRight: this.ProcessDetails.controls['WfNameRight'].value.wfid.split('~')[1],
      leftGatewayUrl:this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl,
      rightGatewayUrl:this.formRight.controls['EnvironmentRight'].value.GatewayUrl
    }

    this.service.LoadWFStgSttCondFromDB(Payload).subscribe(result => {

      if (result && result.length > 0) {

        this.IsShowtree = true;
        this.IsAuthenticationExpaned = false;
        this.LefttreeData = JSON.parse(result[0]);

        this.treeConfig.core.data = this.LefttreeData;
        $('#left_jstree').jstree('destroy').empty().jstree(this.treeConfig);
        this.RighttreeData = JSON.parse(result[1]);
        $('#right_jstree').jstree('destroy');
        this.treeConfig.core.data = this.RighttreeData;
        $('#right_jstree').jstree(this.treeConfig);

        this.StageStateCondCount = result[2];
        this.StageStateCondCount = JSON.parse(this.StageStateCondCount);
        this.StageStateCondCount = this.StageStateCondCount[0];
        this.BindAllEvents();
        this.compareAndSetNodeColors();

      }
    }, error => {
      this.IsShowtree = false;
    })
  }
  LoadPermissionsDataFromDB() {
    var accessToken = localStorage.getItem("AccessToken");
    const aToken = accessToken.split('.');
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser = JSON.parse(userDetail.User);

    const Payload = {
      dbLinkIdLeft: this.formLeft.controls['EnvironmentLeft'].value.ID,
      dbLinkIdRight: this.formRight.controls['EnvironmentRight'].value.ID,
      dbLinkLeft: this.formLeft.controls['EnvironmentLeft'].value.Connection,
      dbLinkRight: this.formRight.controls['EnvironmentRight'].value.Connection,
      wfIdLeft: this.ProcessDetails.controls['WfNameLeft'].value.WFID,
      wfIdRight: this.ProcessDetails.controls['WfNameRight'].value.WFID,
      processIdLeft: this.ProcessDetails.controls['PrcessNameLeft'].value,
      processIdRight: this.ProcessDetails.controls['PrcessNameRight'].value,
      compareMode: "Offline",
      userId: currentUser.UserName,
      leftDbType: this.formLeft.controls['EnvironmentLeft'].value.DBType,
      rightDbType: this.formRight.controls['EnvironmentRight'].value.DBType,
      AccessTokenLeft: this.LeftAccessToken,
      AccessTokenRight: this.RightAccessToken,      
    }

    this.service.LoadPermissionsDataFromDB(Payload).then((response) => {
      this.IsShowtree = true;
      this.IsAuthenticationExpaned = false;
      this.LefttreeData = JSON.parse(response[0]);

      this.treeConfig.core.data = this.LefttreeData;
      $('#left_jstree').jstree('destroy').empty().jstree(this.treeConfig);
      this.RighttreeData = JSON.parse(response[1]);
      $('#right_jstree').jstree('destroy');
      this.treeConfig.core.data = this.RighttreeData;
      $('#right_jstree').jstree(this.treeConfig);

      this.PermissionCounts = response[2];
      this.PermissionCounts = JSON.parse(this.PermissionCounts);
      this.PermissionCounts = this.PermissionCounts[0];
      this.BindAllEvents();
      this.compareAndSetNodeColors();
    })
      .catch((error) => {
      });

  }

  BindAllEvents() {

    $("#right_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeData = $('#left_jstree').jstree().get_node(Ids.leftSelectedId)
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: LeftNodeData,
        RightNode: data

      }, { size: 'lg' });
      const result = modal.result;

    });

    $("#left_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeData = $('#right_jstree').jstree().get_node(Ids.rightSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: data,
        RightNode: RightNodeData

      }, { size: 'lg' });
      const result = modal.result;

    });


    $('#left_jstree').on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const leftTreeJson = $('#left_jstree').jstree(this).get_checked(true);
      const found = leftTreeJson.find((obj) => {
        return obj.li_attr.class === "Unmatched" || obj.li_attr.class === "Missing"
      });
      if (found && leftTreeJson) {
        document.getElementById("SyncLRBtn").removeAttribute('disabled');
      } else {
        document.getElementById("SyncLRBtn").setAttribute('disabled', 'true');
      }
      if (data.node.state.checked) {
        $('#right_jstree').jstree(this).check_node(Ids.rightSelectedId);
      } else {
        $('#right_jstree').jstree(this).uncheck_node(Ids.rightSelectedId);
      }
    })

    $('#right_jstree').on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      if (data.node.state.checked) {
        $('#left_jstree').jstree(this).check_node(Ids.leftSelectedId);
      } else {
        $('#left_jstree').jstree(this).uncheck_node(Ids.leftSelectedId);
      }
    })


    $('#right_jstree').on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      $('#right_jstree').jstree(true).open_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).open_node(Ids.leftSelectedId);
    });

    $('#right_jstree').on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      $('#right_jstree').jstree(true).close_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).close_node(Ids.leftSelectedId);
    });

    $('#left_jstree').on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      $('#right_jstree').jstree(true).open_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).open_node(Ids.leftSelectedId);
    });

    $('#left_jstree').on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      $('#right_jstree').jstree(true).close_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).close_node(Ids.leftSelectedId);
    });

  }

  compareAndSetNodeColors() {
    $('#left_jstree, #right_jstree').on("loaded.jstree", (e, data) => {
      const leftNodes = $('#left_jstree').jstree(true).get_json('#', { flat: true });
      const rightNodes = $('#right_jstree').jstree(true).get_json('#', { flat: true });
      for (let i = 0; i < leftNodes.length; i++) {
        const leftNode = leftNodes[i];
        const rightNode = rightNodes[i];
        if (leftNode?.li_attr?.result === 'Matched' && rightNode?.li_attr?.result === 'Matched') {
          $('#left_jstree').jstree(true).get_node(leftNode?.id).li_attr['style'] = 'color: green;font-size:12px';
          $('#right_jstree').jstree(true).get_node(rightNode?.id).li_attr['style'] = 'color: green;font-size:12px';
        } else if (leftNode?.li_attr?.result === 'Unmatched' && rightNode?.li_attr?.result === 'Unmatched') {

          let parentNode = $('#left_jstree').jstree(true).get_parent(leftNode?.id);
          let rightparentNode = $('#right_jstree').jstree(true).get_parent(rightNode?.id);

          while (parentNode !== '#') {
            if (parentNode) {
              $('#left_jstree').jstree(true).get_node(parentNode).li_attr['style'] = 'color: red;font-size:12px';
              parentNode = $('#left_jstree').jstree(true).get_parent(parentNode);
            }
          }

          while (rightparentNode !== '#') {
            if (rightparentNode) {
              $('#right_jstree').jstree(true).get_node(rightparentNode).li_attr['style'] = 'color: red;font-size:12px';
              rightparentNode = $('#right_jstree').jstree(true).get_parent(rightparentNode);
            }
          }

          $('#left_jstree').jstree(true).get_node(leftNode.id).li_attr['style'] = 'color: red;font-size:12px';
          $('#right_jstree').jstree(true).get_node(rightNode.id).li_attr['style'] = 'color: red;font-size:12px';
        } else if (rightNode?.li_attr?.result === 'MissingRight' || leftNode?.li_attr?.result === 'MissingLeft') {


          if (leftNode)
            $('#left_jstree').jstree(true).get_node(leftNode?.id).li_attr['style'] = 'color: blue;font-size:12px';
          if (rightNode)
            $('#right_jstree').jstree(true).get_node(rightNode?.id).li_attr['style'] = 'color: blue;font-size:12px';
        }

        $('#left_jstree').jstree(true).redraw(true);
        $('#right_jstree').jstree(true).redraw(true);
      }

    });

  }

  syncScroll(event: Event): void {
    const target = event.target as HTMLDivElement;
    this.scrollPosition = target.scrollTop;
  }



  ShortTreeByType(type, Id) {
    const SelectedDiv = document.getElementById(Id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains('IsActive')) {
        SelectedDiv.classList.remove('IsActive');
        $('#left_jstree').jstree(true).search('');
        $('#right_jstree').jstree(true).search('');
      } else {
        SelectedDiv.classList.add('IsActive');
        $('#left_jstree').jstree(true).hide_all;
        $('#right_jstree').jstree(true).hide_all
        $('#left_jstree').jstree(true).search(type);
        $('#right_jstree').jstree(true).search(type);
      
      }
    }

  }

  FindTreeByClass(className, id) {

    const SelectedDiv = document.getElementById(id);
    if (SelectedDiv != null) {
      if (SelectedDiv.classList.contains('IsActive')) {
        SelectedDiv.classList.remove('IsActive');
        $('#left_jstree').jstree(true).search('');
        $('#right_jstree').jstree(true).search('');
      } else {
        SelectedDiv.classList.add('IsActive');
        $('#left_jstree').jstree(true).search(className);
        $('#right_jstree').jstree(true).search(className);
      }
    }
    this.matchedNodes = [];
  }

  handleSearchCallback(node: any) {
    this.matchedNodes.push(node);
  }

  performSearch(value: string): void {
    $('#left_jstree').jstree(true).search(value);
    $('#right_jstree').jstree(true).search(value);

  }

  ChageCompareMode(inputLabel, buttonName, CompareFor) {
    this.ChangeLabel = inputLabel;
    this.CompareButtonName = buttonName;
    this.ProcessDetails.reset();
    this.IsShowtree = false;
    this.IsAuthenticationExpaned = true;
    this.CompareFor = CompareFor;
    this.StageStateCondCount = null;
    this.PermissionCounts = null;
    this.CountData = null;

  }

  SyncWF() {
    if (this.formLeft.invalid && this.formRight.invalid && this.ProcessDetails.invalid)
      return;
    var accessToken = localStorage.getItem("AccessToken");
    const aToken = accessToken.split('.');
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser = JSON.parse(userDetail.User);

    const objwfSync: any = []
    let CheckIsMissingNodeExitsForSync: boolean = false;
    const leftTreeData = $("#left_jstree").jstree(true).get_checked(true);
    const RightTreeData = $("#right_jstree").jstree(true).get_checked(true);
    const leftVersion = this.ProcessDetails.controls['WfNameLeft'].value.WORKFLOWNAME.match(/\((.*?)\)/)?.[1];
    const rightVersion = this.ProcessDetails.controls['WfNameRight'].value.WORKFLOWNAME.match(/\((.*?)\)/)?.[1];
    const dbLinkIdLeft = this.formLeft.controls['EnvironmentLeft'].value.ID;
    const dbLinkIdRight = this.formRight.controls['EnvironmentRight'].value.ID;
    const dbLinkLeft = this.formLeft.controls['EnvironmentLeft'].value.Connection;
    const dbLinkRight = this.formRight.controls['EnvironmentRight'].value.Connection;
    const processIdLeft = this.ProcessDetails.controls['PrcessNameLeft'].value.toString();
    const processIdRight = this.ProcessDetails.controls['PrcessNameRight'].value.toString();
    const leftDbtype = this.formLeft.controls['EnvironmentLeft'].value.DBType.toString();
    const rightDbtype = this.formRight.controls['EnvironmentRight'].value.DBType.toString();
    
    const wfIdLeft = this.CompareFor==1 && this.ProcessDetails.controls['WfNameLeft'].value.wfid.includes('~')?this.ProcessDetails.controls['WfNameLeft'].value.wfid.split('~')[0]:this.ProcessDetails.controls['WfNameLeft'].value.WFID;
    const wfIdRight = this.CompareFor==1 && this.ProcessDetails.controls['WfNameRight'].value.wfid.includes('~')?this.ProcessDetails.controls['WfNameRight'].value.wfid.split('~')[0]:this.ProcessDetails.controls['WfNameRight'].value.WFID;
    const bmIdLeft= this.CompareFor==1 && this.ProcessDetails.controls['WfNameLeft'].value.wfid.includes('~')?this.ProcessDetails.controls['WfNameLeft'].value.wfid.split('~')[1]:0;
    const bmIdRight= this.CompareFor==1 && this.ProcessDetails.controls['WfNameRight'].value.wfid.includes('~')?this.ProcessDetails.controls['WfNameRight'].value.wfid.split('~')[1]:0;
    const UserNameLeft = this.formLeft.controls['usernameLeft'].value.toString();
    const UserNameRight = this.formRight.controls['usernameRight'].value.toString();
    const userId = currentUser.UserId;
    const userCode = sessionStorage.getItem("UserAuthenticationCode").toString();
    const userName = currentUser.UserName;
    const syncAction = "L-R";
    const leftGatewayUrl=this.formLeft.controls['EnvironmentLeft']?.value?.GatewayUrl;
    const rightGatewayUrl=this.formRight.controls['EnvironmentRight']?.value?.GatewayUrl;
    let parentIdLeft = '';
    let parentIdRight = '';
    let parentName = '';
    let rootIds = '';

    let jsonCols = '';
    var sortedElmsL = this.sortByKey(leftTreeData, 'id');

    sortedElmsL.forEach((node, index) => {
      if (node.text === 'Missing Node') {
        CheckIsMissingNodeExitsForSync = true;
      }
    });

    if (CheckIsMissingNodeExitsForSync) {
      this.msg.showMessage('Warning', { body: 'Sorry You can Not Sync Missing Node Left To Right.' })
      return;
    }


    this.msg.showMessage('Warning', { body: 'Are You Sure for Sync Data From Left to Right', isConfirmation: true, btnText: 'Ok' })
      .result.then(ok => {
        if (ok) {

          sortedElmsL.forEach((node, index) => {
            const addNewColsJson: any = {};
            rootIds = node.id.split('_');
            if (node.li_attr.result !== 'Matched') {
              if (node.li_attr.result === 'Unmatched') {

                switch (node.type) {
                  case "STAGE":
                    parentIdLeft = wfIdLeft;
                    parentIdRight = wfIdRight;
                    break;
                  default:
                    parentIdLeft = node.li_attr.pIds.split('-')[0];;
                    parentIdRight = node.li_attr.pIds.split('-')[1];
                    break;
                }

                if (node.parent.length > 0) {
                  const parent = $('#left_jstree').jstree(true).get_node(node.parent)
                  if (parent.id !== "#") {
                    parentName = parent.text;
                  }
                }


                jsonCols = leftTreeData[index].li_attr.jsonCols;
                addNewColsJson.PROCESSID = processIdRight;
                var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, 'True'));
                addNewColsJson.VER = rightVersion;
                var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));


                const newItem =
                {
                  dbLinkIdLeft: dbLinkIdLeft,
                  dbLinkIdRight: dbLinkIdRight,
                  dbLinkLeft: dbLinkLeft,
                  dbLinkRight: dbLinkRight,
                  leftVersion: leftVersion,
                  processIdLeft: processIdLeft,
                  rightVersion: rightVersion,
                  processIdRight: processIdRight,
                  leftDbtype: leftDbtype,
                  rightDbtype: rightDbtype,
                  tblName: node.type,
                  syncAction: syncAction,
                  prevJsonData: JSON.stringify(prevJsonData),
                  newJsonData: JSON.stringify(newJsonData),
                  syncBy: "CheckBox",
                  action: "UpdateData",
                  userId: userId,
                  userCode: userCode,
                  userName: userName,
                  parentIdLeft: parentIdLeft.toString(),
                  parentIdRight: parentIdRight.toString(),
                  idLeft: node.li_attr.lid.split('-')[0].toString(),
                  idRight: node.li_attr.lid.split('-')[1].toString(),
                  Data: newJsonData, //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                  parentName: parentName.toString(),
                  stageId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                  compareMode: "Offline",
                  wfIdLeft: wfIdLeft,
                  wfIdRight: wfIdRight,
                  bmIdLeft:bmIdLeft,
                  bmIdRight:bmIdRight,
                  AccessTokenLeft: this.LeftAccessToken, //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                  AccessTokenRight: this.RightAccessToken,//"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                  UserNameLeft: UserNameLeft,
                  UserNameRight: UserNameRight,
                  leftGatewayUrl:leftGatewayUrl,
                  rightGatewayUrl:rightGatewayUrl
                };
                objwfSync.push(newItem);

              } else {

                switch (node.type) {
                  case "BMOG":
                    parentIdLeft = this.ProcessDetails.controls['BmNameLeft'].value.BMID;
                    parentIdRight = this.ProcessDetails.controls['BmNameRight'].value.BMID;
                    break;
                  default:
                    parentIdLeft = node.li_attr.pIds != null ? node.li_attr.pIds.split('-')[0] : null;
                    parentIdRight = node.li_attr.pIds != null ? node.li_attr.pIds.split('-')[1] : null;
                    break;
                }

                if (node.parent.length > 0) {
                  const parent = $('#left_jstree').jstree(true).get_node(node.parent)
                  if (parent.id !== "#") {
                    parentName = parent.text;
                  }
                }
               
                  jsonCols = leftTreeData[index].li_attr.jsonCols;
                  if (jsonCols != null) {
                  addNewColsJson.PROCESSID = processIdRight;
                  var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, 'True'));
                  addNewColsJson.VER = rightVersion;
                  var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));

                  const newItem =
                  {
                    dbLinkIdLeft: dbLinkIdLeft,
                    dbLinkIdRight: dbLinkIdRight,
                    dbLinkLeft: dbLinkLeft,
                    dbLinkRight: dbLinkRight,
                    leftVersion: leftVersion,
                    processIdLeft: processIdLeft,
                    rightVersion: rightVersion,
                    processIdRight: processIdRight,
                    leftDbtype: leftDbtype,
                    rightDbtype: rightDbtype,
                    tblName: node.type,
                    syncAction: syncAction,
                    prevJsonData: JSON.stringify(prevJsonData),
                    newJsonData: JSON.stringify(newJsonData),
                    syncBy: "CheckBox",
                    action: "InsertData",
                    userId: userId,
                    userCode: userCode,
                    userName: userName,
                    parentIdLeft: parentIdLeft.toString(),
                    parentIdRight: parentIdRight.toString(),
                    wfIdLeft: wfIdLeft,
                    wfIdRight: wfIdRight,
                    bmIdLeft:bmIdLeft,
                    bmIdRight:bmIdRight,
                    idLeft: node.li_attr.lid.split('-')[0].toString(),
                    idRight: node.li_attr.lid.split('-')[1].toString(),
                    Data: newJsonData,  //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
                    parentName: parentName.toString(),
                    stageId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
                    compareMode: "Offline",
                    AccessTokenLeft: this.LeftAccessToken, //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                    AccessTokenRight: this.RightAccessToken, //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
                    UserNameLeft: UserNameLeft,
                    UserNameRight: UserNameRight,
                    leftGatewayUrl:leftGatewayUrl,
                    rightGatewayUrl:rightGatewayUrl
                  };
                  objwfSync.push(newItem);
                }
              }

            }
          });

          this.service.SyncWFNodeDataTodb(objwfSync).then((Response) => {
            if (Response && Response.length > 0) {
              if (Response[0] == 'Role not matched') {
                this.msg.showMessage('Warning', { body: 'Roles are not matched.' })
              }
              else {
                this.msg.showMessage('Warning', { body: 'Selected Record Sync Right To Left  Successfully.' })
                this.GetWorkFlows();
              }
            }
          })
            .catch((error) => {

            });


        }


      });
  }


  ConvertKeysToUppercase(obj) {

    const convertedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        const uppercaseKey = key.toUpperCase();
        convertedObj[uppercaseKey] = obj[key];
      }
    }
  
    return convertedObj;
  }



  sortByKey(array: any[], key: string): any[] {
    return array?.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  GetPrevJsonData(prevJson: any, prevJsonCols: string, prevAddJsonCols: any, value: string): any {
    const prevJsonData: any = {};
    const getCols: string[] = prevJsonCols != null ? prevJsonCols.split(',') : null;

    if (value === 'True') {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          switch (key.toLowerCase()) {
            case 'status':
              prevJsonData[key] = prevJson[key] == 'Active' ? '1' : '0';
              break;
            case 'enabled':
            case 'mandatory':
            case 'visible':
              prevJsonData[key] =
                prevJson[key] === 'Yes' ? '1' : prevJson[key] === 'NA' ? '2' : '0';
              break;
            case 'reqd':
              prevJsonData[key] = prevJson[key] === 'Yes' ? '1' : '0';
              break;
            case 'ntfopt':
              prevJsonData[key] =
                prevJson[key] === 'None'
                  ? '1'
                  : prevJson[key] === 'Notes'
                    ? '2'
                    : prevJson[key] === 'Custom Notification'
                      ? '3'
                      : prevJson[key] === 'Custom Message with Notification'
                        ? '4'
                        : prevJson[key] === 'Prepopulated custom message with notification'
                          ? '5'
                          : '0';
              break;
            default:
              prevJsonData[key] = prevJson[key];
              break;
          }
        }
      }
    } else {
      for (const key in prevJson) {
        if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
          prevJsonData[key] = '';
        }
      }
    }

    // Deep copy the prevAddJsonCols object into prevJsonData
    Object.assign(prevJsonData, JSON.parse(JSON.stringify(prevAddJsonCols)));

    return prevJsonData;
  }

  GetNewjsonData(newJsonData: any, newjsonCols: string, newAddJsonCols: any): any {
    const modifiedJsonData: any = {};
    const getCols: string[] = newjsonCols != null ? newjsonCols.split(',') : null;

    for (const key in newJsonData) {
      if (newJsonData.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
        switch (key.toLowerCase()) {
          case 'status':
            modifiedJsonData[key] = newJsonData[key] === 'Active' ? '1' : '0';
            break;
          case 'enabled':
          case 'mandatory':
          case 'visible':
            modifiedJsonData[key] =
              newJsonData[key] === 'Yes' ? '1' : newJsonData[key] === 'NA' ? '2' : '0';
            break;
          case 'reqd':
            modifiedJsonData[key] = newJsonData[key] === 'Yes' ? '1' : '0';
            break;
          case 'ntfopt':
            modifiedJsonData[key] =
              newJsonData[key] === 'None'
                ? '1'
                : newJsonData[key] === 'Notes'
                  ? '2'
                  : newJsonData[key] === 'Custom Notification'
                    ? '3'
                    : newJsonData[key] === 'Custom Message with Notification'
                      ? '4'
                      : newJsonData[key] === 'Prepopulated custom message with notification'
                        ? '5'
                        : '0';
            break;
          default:
            modifiedJsonData[key] = newJsonData[key];
            break;
        }
      }
    }

    // Deep copy the newAddJsonCols object into modifiedJsonData
    Object.assign(modifiedJsonData, JSON.parse(JSON.stringify(newAddJsonCols)));
    return modifiedJsonData;
  }



  GenerateLeftRightSelectedNodeIds(data) {
    let leftSelectedId = '';
    let rightSelectedId = '';
    const selectedNodeId = data.node.id;
    const LRId = data.node.li_attr.lid;
    const LRdId = data.node.li_attr.lidd;
    const LRRootNodeId = data.node.li_attr.rootNodeId;
    if (selectedNodeId != '' && selectedNodeId != null && LRId != '' && LRId != null && LRRootNodeId != '' && LRRootNodeId != null) {
      const arrId = selectedNodeId.split('_');
      const arrLRdId = LRdId.split('-');
      const arrLRRootNodeId = LRRootNodeId.split('-');
      if (arrId.length > 4) {
        leftSelectedId = 'L_' + arrId[1] + '_' + arrId[2] + '_' + arrLRdId[0] + '_' + arrLRRootNodeId[0];
        rightSelectedId = 'R_' + arrId[1] + '_' + arrId[2] + '_' + arrLRdId[1] + '_' + arrLRRootNodeId[1];
      }
      else {
        leftSelectedId = 'L_' + arrId[1] + '_' + arrLRdId[0] + '_' + arrLRRootNodeId[0];
        rightSelectedId = 'R_' + arrId[1] + '_' + arrLRdId[1] + '_' + arrLRRootNodeId[1];
      }

    }
    return { leftSelectedId, rightSelectedId };
  }
  DownloadFile() {

    const leftTreeJson = $('#left_jstree').jstree().get_checked(true);

    this.STAGE = new Set();
    this.STATE = new Set();
    this.TRIGGER = new Set();
    this.COND = new Set();
  
    let WFID = this.ProcessDetails.controls['WfNameLeft'].value.WFID;

    leftTreeJson.forEach(node => {
      this.extractValue(node.id); 

      const parents = node.parents || [];
      parents.forEach(parentId => {
          this.extractValue(parentId);
      });
  });
    const result = {
      "WFO": Array.from(this.STAGE),
      "WFOS": Array.from(this.STATE),
      "TRIGGER": Array.from(this.TRIGGER),
      "COND": Array.from(this.COND)
  };
  this.ExportWFJsonDataToFile(result,WFID);
  }
  extractValue(input: string): string {
    const parts = input.split("_");
    if (parts.length > 2) {
    let value = parseInt(parts[2], 10);
    if (!isNaN(value)) {
      if (parts[1] === "STAGE") {
        this.STAGE.add(value);
      } else if (parts[1] === "STATE") {
        this.STATE.add(value);
      } else if (parts[1] === "TRIGGER") {
        this.TRIGGER.add(value);
      }
    } else if(parts[2] === "CONDITION") {
      value = parseInt(parts[3], 10)
      this.COND.add(value);
    }
  }
    return "";
}
ExportWFJsonDataToFile(result: any, WFID: any) {
  this.service.ExportJsonWF(result, WFID).subscribe({
    next: (result: any) => {
      const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });

      const link = document.createElement('a');
      const url = URL.createObjectURL(blob);

      link.href = url;
      link.download = `ExportJsonWF.json`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(url);
    },
    error: (error: any) => {
    }
  });
}

onKeyDown(event: KeyboardEvent) { return;}
}
