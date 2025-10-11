import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BmcompareService } from '@app/admin/core/services/bm-compare-service';
import { UserApiService } from '@app/admin/core/services/user-api.service';
import { ToastrService } from 'ngx-toastr';
import $ from 'jquery';
import 'jstree';
import { MessageService } from '@app/core';
import { ShowNodeDetailsComponent } from '../show-node-details/show-node-details.component';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-bm-compare',
  templateUrl: './bm-compare.component.html',
  styleUrls: ['./bm-compare.component.scss']
})
export class BmCompareComponent implements OnInit {
  modalRef: NgbModalRef;
  element: HTMLElement;
  scrollPosition = 0;
  IsShowtree: any;
  //  Left variables  
  formLeft: FormGroup;
  ProcessDetails: FormGroup;
  ProcessNamesLeft: any = [];
  bmleft: any = [];
  submittedLeft: any;
  environmentval_left: any;
  IsAuthenticationExpaned: boolean = true;
  LeftAccessToken: string;

  bmleftModel: string;
  leftbmData: any;
  LeftprocessnameModel: string;
  leftBmVersion: any;
  rightBmVersion: any;
  //  Right variables

  formRight: FormGroup;
  submittedRight: any;
  environments: any = [];
  environmentval_right: any;
  ProcessNamesRight: any = [];
  bmright: any = [];
  bmrightModel: string;
  RightbmData: any;
  RightAccessToken: string;
  // LeftRight Form
  ProcessDetailsForm: FormGroup;
  CountData: any;
  LefttreeData: any = [];
  RighttreeData: any = [];
  treeConfig: any;
  RightprocessnameModel: string;
  MasterBmgNamelist: Array<{ label: string, ID: string }> = [

  ];
  BMOG: Set<number> = new Set();
  BMO: Set<number> = new Set();
  DMOG: Set<number> = new Set();
  DMO: Set<number> = new Set();
  COND : Set<number> = new Set();

  matchedNodes: any = [];
  isSyncBtnDisabled: boolean = false;


  constructor(private formBuilder: FormBuilder,
    private service: BmcompareService,
    private auth: UserApiService,
    private msg: MessageService,
    private readonly toastr: ToastrService,private readonly titleService: Title) 
     {
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
      BmNameLeft: [null, [Validators.required]],
      BmNameRight: [null, [Validators.required]],
      MasterBmgName: ["All Business Group", [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle(`C2M | Business Model`);
    this.getEnvironmnets();
  
    this.treeConfig = {
      core: {
        "check_callback": true,
        data: [],
      },

      "types": {
        "BMOG": {
         
          "icon": "../assets/images/bmog-icon.png"
        },
        "BMO": {
          "icon": "../assets/images/bmo-icon.png"
        },
        "DMOG": {
          "icon": "../assets/images/dmog-icon.png"
        },
        "DMO": {
          "icon": "../assets/images/dmo-icon.png"

        },
        "DMO_CONDITION": {
          "icon": "../assets/images/dmo-cond.png"
        }
      },
      "plugins": ["checkbox", "types", "search", "style"],
      "search": {
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
      "checkbox": {
        whole_node: false,
        tie_selection: false,
         },
    };

    $('#left_jstree, #right_jstree').on("loaded.jstree", (e, data) => {
      this.compareAndSetNodeColors();
    });

    this.ProcessDetails.controls["PrcessNameLeft"].valueChanges.subscribe(data => {
      this.ProcessDetails.controls["BmNameLeft"].setValue(null);
    })

    this.ProcessDetails.controls["PrcessNameRight"].valueChanges.subscribe(data => {
      this.ProcessDetails.controls["BmNameRight"].setValue(null);
    })

  }


  handleSearchCallback(node: any) {
    this.matchedNodes.push(node);
  }

  compareAndSetNodeColors() {
    $('#left_jstree, #right_jstree').on("loaded.jstree", (e, data) => {
      const leftNodes = $('#left_jstree').jstree(true).get_json('#', { flat: true });
      const rightNodes = $('#right_jstree').jstree(true).get_json('#', { flat: true });
      for (let i = 0; i < leftNodes.length; i++) {
        const leftNode = leftNodes[i];
        const rightNode = rightNodes[i];
        if (leftNode?.li_attr?.result === 'Matched' && rightNode?.li_attr?.result === 'Matched') {
          $('#left_jstree').jstree(true).get_node(leftNode?.id).li_attr['style'] = 'color: green;font-size:14px';
          $('#right_jstree').jstree(true).get_node(rightNode?.id).li_attr['style'] = 'color: green;font-size:14px';
        } else if (leftNode?.li_attr?.result === 'Unmatched' && rightNode?.li_attr?.result === 'Unmatched') {

          let parentNode = $('#left_jstree').jstree(true).get_parent(leftNode?.id);
          let rightparentNode = $('#right_jstree').jstree(true).get_parent(rightNode?.id);

          // if (parentNode === '#') {
          //   if(parentNode)
          //   $('#left_jstree').jstree(true).get_node('#').li_attr['style'] = 'color: red;font-size:14px';
          // }

          while (parentNode !== '#') {
            if(parentNode){
            $('#left_jstree').jstree(true).get_node(parentNode).li_attr['style'] = 'color: red;font-size:14px';
            parentNode = $('#left_jstree').jstree(true).get_parent(parentNode);
           }
          }

          while (rightparentNode !== '#') {
            if(rightparentNode){
            $('#right_jstree').jstree(true).get_node(rightparentNode).li_attr['style'] = 'color: red;font-size:14px';
            rightparentNode = $('#right_jstree').jstree(true).get_parent(rightparentNode);
          }
          }

          $('#left_jstree').jstree(true).get_node(leftNode.id).li_attr['style'] = 'color: red;font-size:14px';
          $('#right_jstree').jstree(true).get_node(rightNode.id).li_attr['style'] = 'color: red;font-size:14px';
        } else if (rightNode?.li_attr?.result === 'MissingRight' || leftNode?.li_attr?.result === 'MissingLeft') {
         
        
          if(leftNode)
          $('#left_jstree').jstree(true).get_node(leftNode?.id).li_attr['style'] = 'color: blue;font-size:14px';
          if(rightNode)
          $('#right_jstree').jstree(true).get_node(rightNode?.id).li_attr['style'] = 'color: blue;font-size:14px';
        }

        $('#left_jstree').jstree(true).redraw(true);
        $('#right_jstree').jstree(true).redraw(true);
      }

    });

  }

  getEnvironmnets() {
    this.service.getEnvironmnets().subscribe(res => {
      if (res && res.length > 0) {
        this.environments = res;
      }
    }, err => {

    })
  }

  /********************   Left Start   ************************* */
  getEnvironmentvalueleft(values) {
    this.environmentval_left = values;

  }

  performSearch(value: string): void {
    $('#left_jstree').jstree(true).search(value);
    $('#right_jstree').jstree(true).search(value);

  }

  submitLeft() {
    this.submittedLeft = true;
    if (this.formLeft.valid) {

      this.auth.validateUser(this.formLeft.controls['EnvironmentLeft'].value.Connection, this.formLeft.controls['usernameLeft'].value, this.formLeft.controls['passwordLeft'].value).subscribe(res => {
        if (res && res.accessToken) {
          this.LeftAccessToken = res.accessToken;
            const data = {
            
            AccessToken:res.accessToken,
            dbLinkId: this.formLeft.controls['EnvironmentLeft'].value.ID,
            dbLink: this.formLeft.controls['EnvironmentLeft'].value.Connection,
            userID: this.formLeft.controls['usernameLeft'].value,
            dbtype: this.formLeft.controls['EnvironmentLeft'].value.DBType
          };

          this.service.getProcessNames(data).subscribe({
            next: (res) => {
              if (res && res.Table.length > 0) {
                this.ProcessDetails.controls['PrcessNameLeft'].setValue(null);
                this.ProcessDetails.controls['BmNameLeft'].setValue(null);
                this.ProcessNamesLeft = res.Table;
              }
            },
            error: (err) => {
           }
          });
    }
      })

    } else {
      this.formLeft.markAllAsTouched();
    }
  }

  getbmLeft(obj) {
    const data = {
      AccessToken:this.LeftAccessToken,
      dbLinkId: this.formLeft.controls['EnvironmentLeft'].value.ID,
      dbLink: this.formLeft.controls['EnvironmentLeft'].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formLeft.controls['EnvironmentLeft'].value.DBType
    };
    this.service.getbusinessModel(data).subscribe(res => {
      this.bmleftModel = null;
      if (res && res.Table.length > 0) {
        this.bmleft = res.Table;
      }
    }, err => {

    })

  }
  /************************ End Left  ********************** */
  getEnvironmentvalueRight(env) {
    this.environmentval_right = env;
  }
  submitRight() {
    this.submittedRight = true;
    if (this.formRight.valid) {
      this.auth.validateUser(this.formRight.controls['EnvironmentRight'].value.Connection, this.formRight.controls['usernameRight'].value, this.formRight.controls['passwordRight'].value).subscribe(res => {
        if (res && res.accessToken) {
          this.RightAccessToken = res.accessToken;
        
          const data = {
            AccessToken:res.accessToken,
            dbLinkId: this.formRight.controls['EnvironmentRight'].value.ID,
            dbLink: this.formRight.controls['EnvironmentRight'].value.Connection,
            userID: this.formRight.controls['usernameRight'].value,
            dbtype: this.formRight.controls['EnvironmentRight'].value.DBType
          };

          this.service.getProcessNames(data).subscribe({
            next: (res) => {
              if (res && res.Table.length > 0) {
                this.ProcessDetails.controls['PrcessNameRight'].setValue(null);
                this.ProcessDetails.controls['BmNameRight'].setValue(null);
                this.ProcessNamesRight = res.Table;
              }
            },
            error: (err) => {
            }
          });
    }
      })
    } else {
      this.formRight.markAllAsTouched();
    }
  }

  getbmRight(obj) {

    const data = {
      AccessToken:this.RightAccessToken,
      dbLinkId: this.formRight.controls['EnvironmentRight'].value.ID,
      dbLink: this.formRight.controls['EnvironmentRight'].value.Connection,
      mstrProcessId: obj.ID,
      dbtype: this.formRight.controls['EnvironmentRight'].value.DBType
    };
    this.service.getbusinessModel(data).subscribe(res => {
      this.bmrightModel = null;
      if (res && res.Table.length > 0) {
        this.bmright = res.Table;
      }
    }, err => {

    })
  }


  GetleftRightBM() {

    if (this.ProcessDetails.invalid)
      return;

    const payload = {
      bmIdRight: this.ProcessDetails.controls['BmNameRight'].value.BMID,
      bmIdleft: this.ProcessDetails.controls['BmNameLeft'].value.BMID,
      compareMode: "Offline",
      dbLinkIdLeft: this.formLeft.controls['EnvironmentLeft'].value.ID,
      dbLinkIdRight: this.formRight.controls['EnvironmentRight'].value.ID,
      dbLinkLeft:this.formLeft.controls['EnvironmentLeft'].value.Connection,
      dbLinkRight: this.formRight.controls['EnvironmentRight'].value.Connection,
      leftDbtype: this.formLeft.controls['EnvironmentLeft'].value.DBType,
      rightDbtype: this.formRight.controls['EnvironmentRight'].value.DBType,
      mstrBmgName: this.ProcessDetails.controls['MasterBmgName'].value,
      processIdLeft: this.ProcessDetails.controls['PrcessNameLeft'].value,
      processIdRight: this.ProcessDetails.controls['PrcessNameRight'].value,
      AccessTokenLeft:this.LeftAccessToken, //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o=",
      AccessTokenRight:this.RightAccessToken, //"e+xsLOhKbUbgMg4785LKv5qC+8BXq0gajitBjgcGSetiOtV1m9Oyeis6rkod9Io2D/ygAgexQ4o="
      leftGatewayUrl:this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl,
      rightGatewayUrl:this.formRight.controls['EnvironmentRight'].value.GatewayUrl,
    };
     this.service.GetLeftRightBM(this.formLeft.controls['EnvironmentLeft'].value.GatewayUrl,payload).subscribe(res => {
      if (res.Result && res.Result.length > 0) {
        this.IsShowtree = true;
        this.IsAuthenticationExpaned = false;
        this.LefttreeData = JSON.parse(res.Result[0]);
      
        this.treeConfig.core.data = this.LefttreeData;
        $('#left_jstree').jstree('destroy').empty().jstree(this.treeConfig);
        this.RighttreeData = JSON.parse(res.Result[1]);
        $('#right_jstree').jstree('destroy');
        this.treeConfig.core.data = this.RighttreeData;
        $('#right_jstree').jstree(this.treeConfig);


        this.RightbmData = res.Result[1];
        this.CountData = res.Result[2];
        this.CountData = JSON.parse(this.CountData);
        this.CountData = this.CountData[0];
        this.BindAllEvents();
        
        this.compareAndSetNodeColors();
      //  $('#left_jstree').jstree(this).check_node('R_DMO_27029_5374') 
       

      }
    }, err => {
      this.IsShowtree = false;
    })

  }




  BindAllEvents() {
    $("#right_jstree").on("changed.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      var LeftNodeData = $('#left_jstree').jstree().get_node(Ids.leftSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: LeftNodeData,
        RightNode: data

      }, { size: 'lg' });
      const result = modal.result;

    });

    $("#left_jstree").on("changed.jstree", (e, data) => {
     const Ids = this.GenerateLeftRightSelectedNodeIds(data);
     var RightNodeData = $('#right_jstree').jstree().get_node(Ids.rightSelectedId);
      const modal = this.msg.showComponent(ShowNodeDetailsComponent, {
        LeftNode: data,
        RightNode: RightNodeData

      }, { size: 'lg' });
      const result = modal.result;

    });


    $('#left_jstree').on("check_node.jstree uncheck_node.jstree", (e, data) => {
      const leftTreeJson = $('#left_jstree').jstree(this).get_checked(true);
      const found = leftTreeJson.find((obj) => {
        return obj.li_attr.class === "Unmatched" || obj.li_attr.class === "Missing"
      });
      if (found) {
        document.getElementById("SyncLRBtn").removeAttribute('disabled');
      } else {
        document.getElementById("SyncLRBtn").setAttribute('disabled', 'true');
      }

      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      if (data.node.state.checked) {
        $('#right_jstree').jstree(this).check_node(Ids.rightSelectedId);
      } else {
        $('#right_jstree').jstree(this).uncheck_node(Ids.rightSelectedId);
      }
    })

    $('#right_jstree').on("check_node.jstree uncheck_node.jstree", (e, data) => {

      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace('R_', 'L_');
      if (data.node.state.checked) {
        $('#left_jstree').jstree(this).check_node(Ids.leftSelectedId); 
      } else {
        $('#left_jstree').jstree(this).uncheck_node(Ids.leftSelectedId);
      }
    })


    $('#right_jstree').on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace('R_', 'L_');
      $('#right_jstree').jstree(true).open_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).open_node(Ids.leftSelectedId);
    });

    $('#right_jstree').on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const RightNodeId = data.node.id;
      const LeftNodeId = RightNodeId.replace('R_', 'L_');
      $('#right_jstree').jstree(true).close_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).close_node(Ids.leftSelectedId);
    });

    $('#left_jstree').on("open_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeId = data.node.id;
      const RightNodeId = LeftNodeId.replace('L_', 'R_');
      $('#right_jstree').jstree(true).open_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).open_node(Ids.leftSelectedId);
    });

    $('#left_jstree').on("close_node.jstree", (e, data) => {
      const Ids = this.GenerateLeftRightSelectedNodeIds(data);
      const LeftNodeId = data.node.id;
      const RightNodeId = LeftNodeId.replace('L_', 'R_');
      $('#right_jstree').jstree(true).close_node(Ids.rightSelectedId);
      $('#left_jstree').jstree(true).close_node(Ids.leftSelectedId);
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
        if (this.matchedNodes.length == 0) {
          this.toastr.success('Sorry! No Record Found.');
        }
      }
    }
    this.matchedNodes = [];
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

  SyncNodes() {
   
    if(this.formLeft.invalid && this.formRight.invalid && this.ProcessDetails.invalid)
    return;
   
    var accessToken=localStorage.getItem("AccessToken");
    const aToken = accessToken.split('.');
    const userDetail = JSON.parse(atob(aToken[1]));
    const currentUser =JSON.parse(userDetail.User);

    const objBmSync: any = []
    let CheckIsMissingNodeExitsForSync: boolean = false;
    const leftTreeData = $("#left_jstree").jstree(true).get_checked(true);
    const RightTreeData = $("#right_jstree").jstree(true).get_checked(true);
   
    const dbLinkIdLeft = this.formLeft.controls['EnvironmentLeft'].value.ID.toString();
    const dbLinkIdRight = this.formRight.controls['EnvironmentRight'].value.ID.toString();
    const dbLinkLeft = this.formLeft.controls['EnvironmentLeft'].value.Connection;
    const dbLinkRight = this.formRight.controls['EnvironmentRight'].value.Connection;
    const leftVersion = this.ProcessDetails.controls['BmNameLeft'].value.VER.toString();
    const processIdLeft = this.ProcessDetails.controls['PrcessNameLeft'].value.toString();
    const rightVersion = this.ProcessDetails.controls['BmNameRight'].value.VER.toString();
    const processIdRight = this.ProcessDetails.controls['PrcessNameRight'].value.toString();
    const leftDbtype = this.formLeft.controls['EnvironmentLeft'].value.DBType.toString();
    const rightDbtype = this.formRight.controls['EnvironmentRight'].value.DBType.toString();
    const bmIdLeft = this.ProcessDetails.controls['BmNameLeft'].value.BMID.toString();
    const bmIdRight = this.ProcessDetails.controls['BmNameRight'].value.BMID.toString();
    const UserNameLeft = this.formLeft.controls['usernameLeft'].value.toString();
    const UserNameRight = this.formRight.controls['usernameRight'].value.toString();
   const leftGatewayUrl=this.formLeft.controls['EnvironmentLeft']?.value?.GatewayUrl;
   const rightGatewayUrl=this.formRight.controls['EnvironmentRight']?.value?.GatewayUrl;
    const userId =currentUser.UserId;
    const userCode = sessionStorage.getItem("UserAuthenticationCode").toString();
    const userName = currentUser.UserName;
    let syncAction = "L-R";
    let parentIdLeft = '';
    let parentIdRight = '';
    let parentName = '';
    let rootIds = '';
    let jsonCols='';
    var parentStatus = true;
    var missingStatus = true;
    
    var sortedElmsL = this.sortByKey(leftTreeData, 'id');
    var sortedElmsR = this.sortByKey(RightTreeData, 'id');
   
    leftTreeData.forEach((node, index) => {
      if(node.text==='Missing Node'){
        CheckIsMissingNodeExitsForSync=true;
      }
    });

    if(CheckIsMissingNodeExitsForSync){
      this.msg.showMessage('Warning', {body: 'Sorry You can Not Sync Missing Node Left To Right.'})
      return;
    }


    this.msg.showMessage('Warning', {body: 'Are You Sure for Sync Data From Left to Right', isConfirmation: true, btnText: 'Ok'})
    .result.then(ok => {
    if(ok) {

     // Added by Manish on 10-06-2023
     
     if (leftTreeData.length > 0) {
      var sortedElmsL =  this.sortByKey(leftTreeData, 'id');
      $.each(sortedElmsL, function (index, obj) {
          var pResult = '';
          if (obj.parent.length > 0) {
              var node = $("#left_jstree").jstree(true).get_node(obj.parent);
              if (node.id !== "#") {
                  pResult = node.li_attr.result;
                  switch (syncAction) {
                      case "L-R":
                          if (pResult === 'MissingRight' && !node.state.checked) {
                              parentStatus = false;
                          }
                          break;
                      case "R-L":
                          if (pResult === 'MissingLeft' && !node.state.checked) {
                              parentStatus = false;
                          }
                          break;
                  }
              }
          }
      });
  }

  // End
  
    sortedElmsL.forEach((node, index) => {
    const addNewColsJson: any = {};
    rootIds = node.id.split('_');
    let result = node.li_attr.result;

    if (node.state.disabled || node.text === 'Missing Node') {
      return;
    }

    if (node.parent.length > 0) {
      const parent = $('#left_jstree').jstree(true).get_node(node.parent)
      if (parent.id !== "#") {
        parentName = parent.text;
      }
    }
 
      if (result !== 'Matched') {
        if (result == 'Unmatched') {
          switch (node.type) {
            case "BMOG":
              parentIdLeft = bmIdLeft;
              parentIdRight = bmIdRight;
              break;
            default:
              parentIdLeft = node.li_attr.pIds.split('-')[0];
              parentIdRight = node.li_attr.pIds.split('-')[1];
              break;
          }

          jsonCols=leftTreeData[index].li_attr.jsonCols;
          addNewColsJson.PROCESSID = processIdRight;
          let prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, 'True'));
          addNewColsJson.VER = rightVersion;
          let newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
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
            tblName: node.type,
            syncAction: syncAction,
            syncBy: "CheckBox",
            action: "UpdateData",
            userId: userId,
            userCode: userCode,
            userName: userName,
            parentIdLeft: parentIdLeft.toString(),
            parentIdRight: parentIdRight.toString(),

            idLeft: node.li_attr.lid.split('-')[0].toString(),
            idRight: node.li_attr.lid.split('-')[1].toString(),
            prevJsonData:JSON.stringify(prevJsonData),
            newJsonData:JSON.stringify(newJsonData),
            Data: newJsonData, //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
            parentName: parentName.toString(),
            bmogId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
            compareMode: "Offline",
            bmIdLeft: bmIdLeft,
            bmIdRight: bmIdRight,
            leftDbtype: leftDbtype,
            rightDbtype: rightDbtype,
            AccessTokenLeft:this.LeftAccessToken ,
            AccessTokenRight:this.RightAccessToken ,
            UserNameLeft: UserNameLeft,
            UserNameRight: UserNameRight,
            leftGatewayUrl:leftGatewayUrl,
            rightGatewayUrl:rightGatewayUrl,
          };
          if(syncAction ==='L-R'){
            newItem.Data['PROCESSID']=processIdRight;
          }else{
            newItem.Data['PROCESSID']=processIdLeft;
          }
          
          objBmSync.push(newItem);

        } else {


          switch (syncAction) {
            case "L-R":
                if (result == 'MissingRight') {
                    if (leftTreeData != undefined && RightTreeData != null) {
                      jsonCols=leftTreeData[index].li_attr.jsonCols;
                      addNewColsJson.PROCESSID = processIdRight;
                      var prevJsonData = this.ConvertKeysToUppercase(this.GetPrevJsonData(RightTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson, 'True'));
                      addNewColsJson.VER = rightVersion;
                      var newJsonData = this.ConvertKeysToUppercase(this.GetNewjsonData(leftTreeData[index].li_attr.nodeData, jsonCols, addNewColsJson));
                    }
                }
                break;
                case "R-L":
     
                break;
        }


            switch (node.type) {
            case "BMOG":
              parentIdLeft = this.ProcessDetails.controls['BmNameLeft'].value.BMID;
              parentIdRight = this.ProcessDetails.controls['BmNameRight'].value.BMID;
              break;
            default:
              parentIdLeft = node.li_attr.pIds.split('-')[0];
              parentIdRight = node.li_attr.pIds.split('-')[1];
              break;
          }

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
            tblName: node.type,
            syncAction: syncAction,
            syncBy: "CheckBox",
            action: "InsertData",
            userId: userId,
            userCode: userCode,
            userName: userName,
            parentIdLeft: parentIdLeft.toString(),
            parentIdRight: parentIdRight.toString(),

            idLeft: node.li_attr.lid.split('-')[0].toString(),
            idRight: node.li_attr.lid.split('-')[1].toString(),
            prevJsonData:JSON.stringify(prevJsonData),
            newJsonData:JSON.stringify(newJsonData),
            Data:  newJsonData, //this.ConvertKeysToUppercase(leftTreeData[index].li_attr.nodeData),
            parentName: parentName.toString(),
            bmogId: rootIds.length > 4 ? rootIds[4] : rootIds[3],
            compareMode: "Offline",
            bmIdLeft: bmIdLeft,
            bmIdRight: bmIdRight,
            leftDbtype: leftDbtype,
            rightDbtype: rightDbtype,
            AccessTokenLeft:this.LeftAccessToken , 
            AccessTokenRight:this.RightAccessToken , 
            UserNameLeft: UserNameLeft,
            UserNameRight: UserNameRight,
            leftGatewayUrl:leftGatewayUrl,
            rightGatewayUrl:rightGatewayUrl
           
          };
          if(syncAction ==='L-R'){
            newItem.Data['PROCESSID']=processIdRight;
          }else{
            newItem.Data['PROCESSID']=processIdLeft;
          }

          if (result == 'Unmatched') {
            if (leftTreeData != undefined && RightTreeData != undefined) {
                if (this.CheckNodeDataForSync(leftTreeData, RightTreeData, node.li_attr.jsonCols,  node.li_attr.noCompCols)) {
                  objBmSync.push($.extend(true, {}, newItem));
                }
            }
        }else {

          switch (syncAction) {
              case "L-R":
                  if (result == 'MissingRight') {
                      if (leftTreeData != undefined && leftTreeData != null) {
                        objBmSync.push($.extend(true, {}, newItem));
                      }
                  }
                  break;
              case "R-L":
                  if (result == 'MissingLeft') {
                      if (RightTreeData != undefined && RightTreeData != null) {
                        objBmSync.push($.extend(true, {}, newItem));
                      }
                  }
                  break;
          }
      }

     }

      }
    });
      //   console.log(objBmSync);
      if (objBmSync.length > 0) {
        this.SyncBmNodeDataToDB(objBmSync);
      }
      else {
        this.msg.showMessage('Warning', { body: 'No unmatched or missing record found to sync.' })
        return;
      }


     
      }
    });
 
  }

  SyncBmNodeDataToDB(objBmSync) {
   
    this.service.SyncDataToDB(objBmSync).subscribe(result => {
        if (result && result.length > 0) {
          this.msg.showMessage('Warning', { body: 'Selected Record Sync Left To Right Successfully.' })
            this.GetleftRightBM();
        }
      }, error => {
    //    console.log(error);
      })

  }

  CheckNodeDataForSync(jsonDataLeft, jsonDataRight, dispCols, noCompCols) {
    if (jsonDataLeft !== undefined && jsonDataLeft !== null && jsonDataLeft != '' && jsonDataRight !== undefined && jsonDataRight !== null && jsonDataRight != '' && dispCols !== undefined && dispCols !== null && dispCols != '' && noCompCols !== undefined && noCompCols !== null && noCompCols != '') {
        var compareCols = dispCols.split(",");
        var noCompareCols = noCompCols.split(",");
        for (var key in jsonDataLeft) {
            if (jsonDataLeft.hasOwnProperty(key) && compareCols.indexOf(key) != -1) {
                if (key in jsonDataRight) {
                    if (jsonDataLeft[key] != jsonDataRight[key] && noCompareCols.indexOf(key) == -1) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
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
  const getCols: string[] = prevJsonCols.split(',');

  if (value === 'True') {
    for (const key in prevJson) {
      if (prevJson.hasOwnProperty(key) && getCols.indexOf(key.toUpperCase()) !== -1) {
        switch (key.toLowerCase()) {
          case 'status':
            prevJsonData[key] = prevJson[key] === 'Active' ? '1' : '0';
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
  const getCols: string[] = newjsonCols.split(',');

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

  GenerateLeftRightSelectedNodeIds(data){
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

   extractValue(input: string): string {
    const parts = input.split("_");

    if (parts.length > 2) {
    let value = parseInt(parts[2], 10);

    if (!isNaN(value)) {
      if (parts[1] === "DMO") {
        this.DMO.add(value);
      } else if (parts[1] === "DMOG") {
        this.DMOG.add(value);
      } else if (parts[1] === "BMO") {
        this.BMO.add(value);
      } else if (parts[1] === "BMOG") {
        this.BMOG.add(value);
      }
    }
    else if(parts[2] === "CONDITION") {
      value = parseInt(parts[3], 10)
      this.COND.add(value);
    }
  }

    return "";
}
DownloadFile() {

  const leftTreeJson = $('#left_jstree').jstree().get_checked(true);
  const BMID = this.ProcessDetails.controls['BmNameLeft'].value.BMID;
  this.DMO = new Set();
  this.DMOG = new Set();
  this.BMO = new Set();
  this.BMOG = new Set();
  this.COND = new Set();
  leftTreeJson.forEach(node => {
      this.extractValue(node.id); 

      const parents = node.parents || [];
      parents.forEach(parentId => {
          this.extractValue(parentId);
      });
  });

  const result = {
      "BMOG": Array.from(this.BMOG),
      "BMO": Array.from(this.BMO),
      "DMOG": Array.from(this.DMOG),
      "DMO": Array.from(this.DMO),
      "COND":Array.from(this.COND),
  };


  this.ExportBmJsonDataToFile(result, BMID);
}

  ExportBmJsonDataToFile(result: any, BMID:any) {

     this.service.ExportJsonBM(result, BMID).subscribe({
      next: (result) => {
      
      const blob = new Blob([JSON.stringify(result)], { type: 'application/json' });
  
      const link = document.createElement('a');
  
      const url = URL.createObjectURL(blob);
  
      link.href = url;
      link.download = 'exportedData.json';  
  
      document.body.appendChild(link);
  
      link.click();
  
      document.body.removeChild(link);
  
      URL.revokeObjectURL(url);
      },
      error: (err) => {
      }
    });

  }
  

}




